import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <>
      <section className="md:bg-header-tablet lg:bg-header-desktop bg-header-mobile bg-cover bg-bottom py-[100px] md:py-[140px] lg:py-[200px;]">
        <div className="flex flex-col justify-center text-center text-neutral-000 md:mx-auto md:max-w-sm lg:max-w-[1110px] lg:justify-start lg:px-8 lg:text-left">
          <p className="py-4 overline opacity-50 md:p-6">New Product</p>
          <h1 className="py-2 text-4xl font-bold uppercase md:text-[54px] md:leading-[3rem] lg:max-w-[40%] lg:text-[56px] lg:leading-[4rem] lg:tracking-[2px]">
            XX99 Mark II Headphones
          </h1>
          <p className="mx-auto w-4/5 py-4 opacity-75 md:w-full lg:mx-0 lg:max-w-[28%] lg:py-8 lg:font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <div className="py-2 md:p-6 lg:p-0">
            <Button text="See Product" color="creamy-900" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
