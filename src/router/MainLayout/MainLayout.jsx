import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />
      <Outlet />
    </div>
  );
}
