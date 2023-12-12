import React from "react";
import Button from "./Button";
import zx9_speakerImage from "../assets/home/mobile/image-speaker-zx9.png";
import zx7_speakerImage from "../assets/home/mobile/image-speaker-zx7.jpg";
import zx7t_speakerImage from "../assets/home/tablet/image-speaker-zx7.jpg";
import yx1_earphones from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1t_earphones from "../assets/home/tablet/image-earphones-yx1.jpg";

function Featured() {
  return (
    <>
      <section className="mx-auto mb-2 mt-14 flex w-5/6 flex-col items-center">
        <div className="md:p-19 rounded-lg bg-creamy-900 bg-circles bg-cover bg-bottom pb-10 pt-14 text-center text-neutral-000 md:mb-4 md:py-20">
          <div className="mx-auto max-w-[100px] md:max-w-[200px]">
            <img src={zx9_speakerImage} alt="speaker image" />
          </div>
          <div className="md:mx-auto md:max-w-[50%]">
            <h1 className="px-10 pt-6 text-4xl font-bold uppercase md:text-5xl">
              ZX9 Speaker
            </h1>
            <div className="p-6">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </div>
          </div>
          <Button text="See Product" color="black" />
        </div>

        <div className="relative my-2 rounded-lg bg-neutral-200">
          <picture>
            <source media="(min-width: 768px)" srcSet={zx7t_speakerImage} />
            <img
              src={zx7_speakerImage}
              alt="zx7 speaker"
              className="rounded-lg"
            />
          </picture>
          <div className="absolute top-[30%] px-6 md:left-[6%]">
            <h2 className="pb-6 text-3xl font-bold uppercase">ZX7 Speaker</h2>
            <Button text="See Product" color="transparent" />
          </div>
        </div>

        <div className="flex flex-col md:my-4 md:flex-row md:gap-4">
          <div className="my-2">
            <picture>
              <source media="(min-width: 768px)" srcSet={yx1t_earphones} />
              <img
                src={yx1_earphones}
                alt="yx1 earphones"
                className="rounded-lg"
              />
            </picture>
          </div>

          <div className="my-2 w-full rounded-lg bg-neutral-200 px-6 py-10 md:flex md:flex-col md:justify-center md:px-8">
            <h2 className="pb-6 text-3xl font-bold uppercase">YX1 Earphones</h2>
            <div>
              <Button text="See Product" color="transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
