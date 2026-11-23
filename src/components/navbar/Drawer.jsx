import Alert from "./Alert";
import NavBottom from "./NavBottom";
import NavMain from "./NavMain";
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
        <NavBottom />
        <div className="navbar bg-base-300 w-full">
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <main>{children}</main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
