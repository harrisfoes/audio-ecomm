import "./index.css";
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Homepage from "./components/component-pages/Homepage";
import CategoryPage from "./components/component-pages/CategoryPage";
import ProductPage from "./components/component-pages/ProductPage";
import Checkout from "./components/component-pages/Checkout";
import { ProductContext } from "./components/contexts/ProductContext";

const App = () => {
  const [products, setProducts] = useContext(ProductContext);

  const updateProducts = (newProduct) => {
    //setProducts(newProduct)
    console.log(newProduct);
  };

  return (
    <>
      <ProductContext.Provider value={{ products, updateProducts }}>
        <Banner />
        <Routes>
          <Route path="/audio-ecomm" element={<Homepage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ProductContext.Provider>
      <Footer />
    </>
  );
};

export default App;
