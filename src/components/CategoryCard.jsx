import React from "react";
import arrowRight from "../assets/shared/desktop/icon-arrow-right.svg";

function CategoryCard({ name, image }) {
  return (
    <>
      <div className="relative my-2 flex min-w-[360px] flex-col items-center pt-20 md:min-w-[225px]">
        <div className="absolute top-[14%] max-w-[150px]">
          <img src={image} alt="earphone-category" />
        </div>
        <div className="flex w-5/6 flex-col items-center rounded-lg bg-neutral-200 py-4">
          <div className="pt-14 text-base font-bold uppercase tracking-wider">
            {name}
          </div>
          <div className="flex gap-2 pt-4 text-sm font-bold uppercase tracking-wider">
            <span className="opacity-50">Shop</span>
            <div className="flex flex-col justify-center">
              <img
                src={arrowRight}
                alt="right-arrow"
                className="h-[16px] stroke-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
