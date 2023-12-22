import React from "react";
import Banner from "../Banner";
import Hero from "../Hero";
import HomeCategorySection from "../HomeCategory";
import Featured from "../Featured";
import AdCopy from "../AdCopy";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <main>
        <Hero />
        <HomeCategorySection />
        <Featured />
        <AdCopy />
      </main>
    </>
  );
}

export default Homepage;
