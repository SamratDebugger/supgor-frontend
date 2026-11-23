import { AiOutlineThunderbolt } from "react-icons/ai";

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";

export default function NavTop() {
  return (
    <div className="bg-base-100">
      <div className="navbar  max-w-360 mx-auto ">
        <div className="navbar-start">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About Us</a>
            </li>

            <li>
              <a>FAQ</a>
            </li>
            <li>
              <Link to="/login">My Account</Link>
            </li>
            <li>
              <a>Order Traking</a>
            </li>
          </ul>
          <span className="text-brightGreen flex items-center gap-1">
            <AiOutlineThunderbolt />
            <p>Order now and get it within 15 min.!</p>
          </span>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Contact</a>
            </li>
            <li>
              <div className="dropdown dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-1"
                >
                  English
                  <IoIosArrowDown />
                </div>
                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-25 p-2 shadow-md"
                >
                  <li>
                    <a>Spanish</a>
                  </li>
                  <li>
                    <a>French</a>
                  </li>
                  <li>
                    <a>German</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-1"
                >
                  USD
                  <IoIosArrowDown />
                </div>
                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-20 p-2 shadow-md"
                >
                  <li>
                    <a>EUR</a>
                  </li>
                  <li>
                    <a>INR</a>
                  </li>
                  <li>
                    <a>GBP</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
