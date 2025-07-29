import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.tsx";
import { router } from "./routes/index.tsx";

export default function RootApp() {
  return (
    <AuthProvider>
      <RouterProvider {...{ router }} />
    </AuthProvider>
  );
}
