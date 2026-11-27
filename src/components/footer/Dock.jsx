import { FaHeart, FaHouse, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { Link } from "react-router";

export default function Dock() {
  return (
    <div className="dock md:hidden shadow-lg">
      <Link to="/">
        <button className="flex flex-col items-center">
          <FaHouse className="size-[1.2em]" />
          <span className="dock-label">Home</span>
        </button>
      </Link>
      <Link>
        <button className="flex flex-col items-center">
          <FaMagnifyingGlass className="size-[1.2em]" />
          <span className="dock-label">search</span>
        </button>
      </Link>
      <Link>
        <button className="flex flex-col items-center">
          <FaHeart className="size-[1.2em]" />
          <span className="dock-label">wishlist</span>
        </button>
      </Link>
      <Link to="/login">
        <button className="flex flex-col items-center">
          <FaUser className="size-[1.2em]" />
          <span className="dock-label">Account</span>
        </button>
      </Link>
    </div>
  );
}
