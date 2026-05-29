import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Brands from "./pages/Brands.jsx";
import Products from "./pages/Products.jsx";
import Industries from "./pages/Industries.jsx";
import Amenities from "./pages/Amenities.jsx";
import Manufacturing from "./pages/Manufacturing.jsx";
import Contact from "./pages/Contact.jsx";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="brands" element={<Brands />} />
          <Route path="products" element={<Products />} />
          <Route path="industries" element={<Industries />} />
          <Route path="amenities" element={<Amenities />} />
          {/* <Route path="manufacturing" element={<Manufacturing />} /> */}
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;