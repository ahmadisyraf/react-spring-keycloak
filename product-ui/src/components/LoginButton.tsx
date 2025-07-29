import { Button } from "./ui/button";

export default function LoginButton() {
  const hostUrl = import.meta.env.VITE_HOST_URL;
  const realmName = import.meta.env.VITE_REALM_NAME;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

  if (!hostUrl || !realmName || !clientId || !redirectUri) {
    throw new Error("Environment key missing");
  }

  return (
    <a
      href={`${hostUrl}/realms/${realmName}/protocol/openid-connect/auth?response_type=code&scope=openid profile email&client_id=${clientId}&redirect_uri=${redirectUri}`}
    >
      <Button>Log In</Button>
    </a>
  );
}
