import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="bg-header-mobile bg-cover bg-bottom py-[100px] md:bg-header-tablet md:py-[140px] lg:bg-header-desktop lg:py-[200px;]">
        <div className="flex flex-col justify-center  text-center text-neutral-000 md:mx-auto md:max-w-sm lg:max-w-[1110px] lg:justify-start lg:text-left">
          <p className="py-4 overline opacity-50 md:p-6 lg:px-0">New Product</p>
          <h1 className="py-2 text-4xl font-bold uppercase md:text-[54px] md:leading-[3.2rem] md:tracking-[2px] lg:max-w-[40%] lg:text-[56px] lg:leading-[4rem] lg:tracking-[2px]">
            XX99 Mark II Headphones
          </h1>
          <p className="mx-auto w-4/5 py-4 opacity-75 md:w-full lg:mx-0 lg:max-w-[35%] lg:py-8 lg:font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <div className="py-2 md:p-6 lg:p-0">
            <Link to="/product/xx99-mark-two-headphones">
              <Button text="See Product" color="creamy-900" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
