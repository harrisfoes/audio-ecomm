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
      <main>
        <Banner />
        <Hero />
        <CategorySection />
        <Featured />
        <AdCopy />
        <Footer />
      </main>
    </>
  );
}

export default Homepage;
