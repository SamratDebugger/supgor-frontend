import { Outlet } from "react-router";
import DashDrawer from "../components/dashboard/DashDrawer";

export default function DashLayout() {
  return (
    <DashDrawer>
      <Outlet />
    </DashDrawer>
  );
}
