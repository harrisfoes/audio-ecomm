import React from "react";
import arrowRight from "../assets/shared/desktop/icon-arrow-right.svg";

function CategoryCard({ name, image }) {
  return (
    <>
      <div className="pt-20 relative min-w-[360px] mx-auto flex flex-col md:flex-row items-center  my-2 md:mx-2">
        <div className="absolute max-w-[150px] top-[14%]">
          <img src={image} alt="earphone-category" />
        </div>
        <div className="bg-neutral-200 py-4 rounded-lg w-5/6 flex flex-col items-center">
          <div className="pt-14 text-base font-bold uppercase tracking-wider">
            {name}
          </div>
          <div className="pt-4 uppercase text-sm font-bold tracking-wider flex gap-2">
            <span className="opacity-50">Shop</span>
            <div className="flex flex-col justify-center">
              <img
                src={arrowRight}
                alt="right-arrow"
                className="stroke-2 h-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
