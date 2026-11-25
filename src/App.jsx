import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Beverages from "./pages/Beverages";
import Bakery from "./pages/Bakery";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import DashLayout from "./layout/DashLayout";
import Protected from "./pages/Protected";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        <Route
          element={
            <Protected>
              <DashLayout />
            </Protected>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
