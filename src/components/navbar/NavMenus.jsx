import { Link } from "react-router";

export default function NavMenus() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/beverage">Beverage</Link>
      </li>
      <li>
        <Link to="/bakery">Bakery</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
}
