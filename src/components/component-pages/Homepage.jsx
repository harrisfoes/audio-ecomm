import React from "react";
import Banner from "../Banner";
import Hero from "../Hero";
import CategorySection from "../CategorySection";
import Featured from "../Featured";
import AdCopy from "../AdCopy";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <Banner />
      <main>
        <Hero />
        <CategorySection />
        <Featured />
        <AdCopy />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
