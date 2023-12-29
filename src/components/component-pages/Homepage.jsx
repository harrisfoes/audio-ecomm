import React from "react";
import Hero from "../Hero";
import HomeCategory from "../HomeCategory";
import Featured from "../Featured";
import AdCopy from "../AdCopy";

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
