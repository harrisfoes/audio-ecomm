import React from "react";
import Button from "./Button";

function CategoryBanner({ image, name, description, isNew }) {
  return (
    <div>
      <img src={image} alt={name + " image"} />
      {isNew && <h2>New Product</h2>}
      <h1>{name}</h1>
      <p>{description}</p>
      <Button text="See product" color="creamy-900" />
    </div>
  );
}

export default CategoryBanner;
