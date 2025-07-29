import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext.ts";
import keycloak from "../lib/keycloak.ts";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | null | undefined>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    keycloak
      .init({
        onLoad: "login-required",
        pkceMethod: "S256",
      })
      .then((authenticated) => {
        if (authenticated && keycloak.token) {
          setToken(keycloak.token);
          localStorage.setItem("accessToken", keycloak.token);

          setInterval(() => {
            keycloak
              .updateToken(60)
              .then((refreshed) => {
                if (refreshed && keycloak.token) {
                  setToken(keycloak.token);
                  localStorage.setItem("accessToken", keycloak.token);
                }
              })
              .catch(() => {
                keycloak.logout().then(() => {
                  setToken(null);
                  localStorage.removeItem("accessToken");
                });
              });
          }, 60000);
        } else {
          console.warn("User not authenticated");
        }
        setInitialized(true);
      });
  }, []);

  if (!initialized) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}
