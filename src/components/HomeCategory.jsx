import React from "react";
import earphoneCatImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphoneCatImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCatImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import HomeCategoryCard from "./HomeCategoryCard";

function HomeCategory({ toggleMenu }) {
  return (
    <section className="lg:my-26 mx-auto mb-4 mt-4 md:my-8 md:w-[90%] lg:my-24 lg:max-w-[1110px]">
      <div className="mx-auto flex flex-col  md:mx-0 md:flex-row md:justify-between">
        <HomeCategoryCard
          name="Headphones"
          image={headphoneCatImage}
          link="/category/headphones"
          toggleMenu={toggleMenu}
        />
        <HomeCategoryCard
          name="Speakers"
          image={speakerCatImage}
          link="/category/speakers"
          toggleMenu={toggleMenu}
        />
        <HomeCategoryCard
          name="Earphones"
          image={earphoneCatImage}
          link="/category/earphones"
          toggleMenu={toggleMenu}
        />
      </div>
    </section>
  );
}

export default HomeCategory;
