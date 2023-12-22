import React from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import CategoryBanner from "../CategoryBanner";
import image from "../../assets/home/mobile/image-header.jpg";
function CategoryPage() {
  //id is the category selected
  const { id } = useParams();

  const payload = data.filter((items) => {
    return items.category === id;
  });

  console.log(payload);
  return (
    <div>
      <img src={image} />
      <h1>{id}</h1>
      {payload.map((items) => {
        return (
          <CategoryBanner
            key={items.name}
            image={items.image.mobile}
            name={items.name}
            description={items.description}
            isNew={items.new}
          />
        );
      })}
    </div>
  );
}

export default CategoryPage;
