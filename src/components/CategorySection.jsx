import React from "react";
import earphoneCatImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphoneCatImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCatImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryCard from "./CategoryCard";

function CategorySection() {
  return (
    <section className="lg:my-26 mx-auto mb-8 mt-4 md:my-8 md:max-w-[800px] lg:my-24 lg:max-w-[1110px]">
      <div className="mx-auto flex flex-col justify-evenly md:max-w-[90%] md:flex-row">
        <CategoryCard name="Headphones" image={headphoneCatImage} />
        <CategoryCard name="Speakers" image={speakerCatImage} />
        <CategoryCard name="Earphones" image={earphoneCatImage} />
      </div>
    </section>
  );
}

export default CategorySection;
