import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Menu from "../pages/Menu";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: async () => {
          const token = localStorage.getItem("accessToken");

          const res = await fetch("http://localhost:8080/api/v1/product", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!res.ok) throw new Error("Something wrong");

          const product = (await res.json()) as {
            id: number;
            name: string;
            price: number;
          }[];

          return product;
        },
        Component: Menu,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
    ],
  },
]);
