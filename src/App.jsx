import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Homepage from "./components/component-pages/Homepage";
import Headphones from "./components/component-pages/CategoryPage";

const App = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/audio-ecomm" element={<Homepage />} />
        <Route path="/category/:id" element={<Headphones />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
