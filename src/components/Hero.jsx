import React from "react";
import MobileHeaderImg from "../assets/home/mobile/image-header.jpg";
import Button from "./Button";

function Hero() {
  return (
    <>
      <section className="bg-header-mobile bg-cover bg-bottom py-[100px]">
        <div className="text-neutral-000 flex flex-col justify-center text-center">
          <p className="overline opacity-50 py-4">New Product</p>
          <h1 className="text-4xl uppercase font-bold py-2">
            XX99 Mark II Headphones
          </h1>
          <p className="opacity-75 py-4 w-4/5 mx-auto">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <div className="py-2">
            <Button text="See Product" color="creamy-900" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
