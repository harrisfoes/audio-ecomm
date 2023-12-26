import React from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import CategoryCard from "../CategoryCard";
import HomeCategory from "../HomeCategory";
import AdCopy from "../AdCopy";

function CategoryPage() {
  //id is the category selected
  const { id } = useParams();

  const payload = data.filter((items) => {
    return items.category === id;
  });

  let sorted = [...payload].sort((a, b) => {
    if (a.new === true && b.new === false) {
      return -1; // true comes before false
    } else if (a.new === false && b.new === true) {
      return 1; // false comes after true
    } else {
      return 0; // no change in order
    }
  });

  //console.log(sorted);
  //console.log(payload);

  return (
    <>
      <section>
        <h1 className="bg-neutral-900 py-16 text-center font-manrope text-3xl font-bold uppercase tracking-widest text-neutral-000">
          {id}
        </h1>

        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-center">
          {sorted.map((items, index) => {
            //console.log(index % 2 == 0);
            return (
              <CategoryCard
                key={items.name}
                mobileImage={
                  "/audio-ecomm/" + items.categoryImage.mobile.slice(1)
                }
                tabletImage={
                  "/audio-ecomm/" + items.categoryImage.tablet.slice(1)
                }
                desktopImage={
                  "/audio-ecomm/" + items.categoryImage.desktop.slice(1)
                }
                name={items.name}
                description={items.description}
                isNew={items.new}
                isReverse={index % 2 == 0}
              />
            );
          })}
        </div>
      </section>
      <HomeCategory />
      <AdCopy />
    </>
  );
}

export default CategoryPage;
