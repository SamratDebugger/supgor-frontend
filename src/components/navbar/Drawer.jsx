import CopyRight from "../footer/CopyRight";
import Footer from "../footer/Footer";
import Alert from "./Alert";
import NavBottom from "./NavBottom";
import NavMain from "./NavMain";
import NavMenus from "./NavMenus";
import NavTop from "./NavTop";

export default function Drawer({ children }) {
  return (
    <div className="drawer">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content flex flex-col">
        <Alert />
        {/* Navbar */}
        <div className="max-lg:hidden">
          <NavTop />
        </div>
        <NavMain />
        <div className="max-lg:hidden">
          <NavBottom />
        </div>

        {/* Page content here */}
        <main>{children}</main>
        <div className="bg-white">
          <Footer />
        </div>
        <CopyRight />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <NavMenus />
        </ul>
      </div>
    </div>
  );
}
