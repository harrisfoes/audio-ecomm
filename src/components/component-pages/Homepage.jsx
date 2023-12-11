import React from "react";
import Banner from "../Banner";
import Hero from "../Hero";
import CategorySection from "../CategorySection";

function Homepage() {
  return (
    <>
      <Banner />
      <main>
        <Hero />
        <section>
          <CategorySection />
        </section>
      </main>
    </>
  );
}

export default Homepage;
