import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function CategoryCard({
  mobileImage,
  tabletImage,
  desktopImage,
  name,
  description,
  isNew,
  isReverse,
  link,
}) {
  return (
    <div className="mx-auto my-14 flex w-[90%] flex-col items-center justify-center text-center font-manrope xl:w-full xl:text-left">
      <div
        className={`xl:flex-between xl:flex xl:gap-16 ${
          isReverse ? "xl: xl:flex-row" : "xl:flex-row-reverse"
        }`}
      >
        <picture className="xl:w-1/2">
          <source
            media="(min-width:768px) and (max-width:1279px)"
            srcSet={tabletImage}
          />
          <source media="(min-width: 1280px)" srcSet={desktopImage} />
          <img
            src={mobileImage}
            alt={name + " image"}
            className="mx-auto rounded-lg"
          />
        </picture>
        <div
          className={` xl:flex xl:w-1/2 xl:flex-col xl:justify-center ${
            isReverse ? "xl:items-end" : "xl:items-start"
          }`}
        >
          <div className=" xl:w-[90%]">
            {isNew && (
              <h2 className="py-4 uppercase tracking-[0.5rem] text-creamy-900">
                New Product
              </h2>
            )}
            <h1 className="py-4 text-3xl font-bold uppercase">{name}</h1>
            <p className="mx-auto py-4 leading-relaxed opacity-50 md:w-[80%] xl:w-full">
              {description}
            </p>
            <div className="py-2 text-neutral-000">
              <Link to={"/product/" + link}>
                <Button text="See product" color="creamy-900" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
