import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Homepage from "./components/component-pages/Homepage";
import Headphones from "./components/component-pages/Headphones";
import Speakers from "./components/component-pages/Speakers";

const App = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/audio-ecomm" element={<Homepage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
