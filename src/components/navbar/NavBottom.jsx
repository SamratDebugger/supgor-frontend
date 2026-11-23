import NavMenus from "./NavMenus";

export default function NavBottom() {
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-360 mx-auto p-5">
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            <NavMenus />
          </ul>
        </div>
        <div className="flex-none ">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost m-1">
              % Best Seller{" "}
              <span className="bg-error p-2 rounded-r-full">Sale</span>
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
