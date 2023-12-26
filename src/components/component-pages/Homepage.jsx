import React from "react";
import Banner from "../Banner";
import Hero from "../Hero";
import HomeCategory from "../HomeCategory";
import Featured from "../Featured";
import AdCopy from "../AdCopy";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <main>
        <Hero />
        <HomeCategory />
        <Featured />
        <AdCopy />
      </main>
    </>
  );
}

export default Homepage;
