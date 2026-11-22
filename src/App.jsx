import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Beverages from "./pages/Beverages";
import Bakery from "./pages/Bakery";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
