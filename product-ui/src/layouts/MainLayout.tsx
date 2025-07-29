import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="relative">
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}
