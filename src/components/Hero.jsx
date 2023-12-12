import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <>
      <section className="md:bg-header-tablet bg-header-mobile bg-cover bg-bottom py-[100px] md:py-[140px]">
        <div className="flex flex-col justify-center text-center text-neutral-000 md:mx-auto md:max-w-sm">
          <p className="py-4 overline opacity-50 md:p-6">New Product</p>
          <h1 className="py-2 text-4xl font-bold uppercase md:text-[54px] md:leading-[3rem]">
            XX99 Mark II Headphones
          </h1>
          <p className="mx-auto w-4/5 py-4 opacity-75 md:w-full">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <div className="py-2 md:p-6">
            <Button text="See Product" color="creamy-900" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
