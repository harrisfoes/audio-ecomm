import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Homepage from "./components/component-pages/Homepage";
import CategoryPage from "./components/component-pages/CategoryPage";
import ProductPage from "./components/component-pages/ProductPage";
const App = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/audio-ecomm" element={<Homepage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
