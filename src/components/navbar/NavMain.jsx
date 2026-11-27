import { BsBag } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
export default function NavMain() {
  return (
    <header className="bg-base-100 sticky top-0 z-50 max-lg:shadow-lg">
      <div className="navbar gap-5 justify-between max-w-360 px-5 mx-auto ">
        <div className="navbar-start w-auto">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/">
            <img
              className="max-w-50 max-lg:hidden"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-4 ml-10 max-lg:hidden">
            <div className="p-3 text-white text-xl bg-main rounded-full">
              <IoLocationOutline />
            </div>
            <div>
              <h3>All</h3>
              <span>Your location</span>
            </div>
          </div>
        </div>
        <div className="navbar-center flex-1  lg:flex justify-center items-center  ">
          <label className="input w-full rounded-full bg-base-300 border-none outline-0 max-lg:hidden">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search Popular Product..."
            />
          </label>
          <Link to="/">
            <img
              className="max-w-30 sm:max-w-50 lg:hidden"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-end w-auto gap-5 text-xl">
          <div className="border rounded-full p-3 max-lg:hidden">
            <Link to="/login">
              <CiUser />
            </Link>
          </div>

          <div className="border rounded-full p-3 relative max-lg:hidden">
            <CiHeart />
            <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>

          <div className="border rounded-full p-3 max-lg:hidden">
            <FaArrowRightArrowLeft />
          </div>
          <div className="border rounded-full p-3 relative">
            <BsBag />{" "}
            <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="grid max-lg:hidden">
            <span>$00</span>
            <span className="text-xs">Your Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}
