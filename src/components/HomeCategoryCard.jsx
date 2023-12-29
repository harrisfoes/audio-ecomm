import React from "react";
import arrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

function HomeCategoryCard({ name, image, link, toggleMenu }) {
  return (
    <>
      <div className="relative flex min-w-[360px] flex-col items-center  pt-20 md:min-w-[225px] lg:min-w-[350px]">
        <div className="absolute top-[14%] max-w-[150px]">
          <img src={image} alt="earphone-category" />
        </div>
        <div className="flex w-5/6 flex-col items-center rounded-lg bg-neutral-200 py-4 lg:pb-8">
          <div className="pt-14 text-base font-bold uppercase tracking-wider lg:text-lg">
            {name}
          </div>
          <Link to={link}>
            <div
              className="flex gap-2 pt-4 text-sm font-bold uppercase tracking-wider"
              onClick={toggleMenu}
            >
              <span className="cursor-pointer opacity-50 hover:text-creamy-900 hover:opacity-100">
                Shop
              </span>
              <div className="flex flex-col justify-center">
                <img
                  src={arrowRight}
                  alt="right-arrow"
                  className="h-[16px] stroke-2"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeCategoryCard;
