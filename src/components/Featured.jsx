import React from "react";
import Button from "./Button";
import zx9_speakerImage from "../assets/home/mobile/image-speaker-zx9.png";
import zx9d_speakerImage from "../assets/home/desktop/image-speaker-zx9.png";
import zx7_speakerImage from "../assets/home/mobile/image-speaker-zx7.jpg";
import zx7t_speakerImage from "../assets/home/tablet/image-speaker-zx7.jpg";
import zx7d_speakerImage from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1_earphones from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1t_earphones from "../assets/home/tablet/image-earphones-yx1.jpg";
import yx1d_earphones from "../assets/home/desktop/image-earphones-yx1.jpg";

function Featured() {
  return (
    <>
      <section className="mx-auto mb-2 mt-14 flex w-[95%] flex-col items-center md:max-w-[690px] lg:max-w-[1110px]">
        <div className="md:p-19 rounded-lg bg-creamy-900 bg-circles bg-cover bg-bottom pb-10 pt-14 text-center text-neutral-000 md:mb-4 md:py-20 lg:relative lg:flex lg:bg-center lg:px-20 lg:pb-0">
          <div className="mx-auto max-w-[100px]  md:max-w-[200px] lg:relative lg:top-2 lg:max-w-[50%]">
            <picture>
              <source
                media="(min-width:768px) and (min-width:1279px)"
                srcSet={zx9d_speakerImage}
              />
              <img
                src={zx9_speakerImage}
                alt="speaker image"
                className="lg:w-[410px]"
              />
            </picture>
          </div>
          <div className=" md:mx-auto md:max-w-[50%] lg:max-w-[30%] lg:text-left">
            <h1 className="px-10 pt-6 text-4xl font-bold uppercase md:text-5xl lg:px-0 lg:pt-20 lg:text-[56px]">
              ZX9 Speaker
            </h1>
            <div className="p-6 lg:px-0 lg:py-10 lg:font-medium">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </div>
            <Button text="See Product" color="black" />
          </div>
        </div>

        <div className="relative my-2 rounded-lg bg-neutral-200">
          <picture>
            <source
              media="(min-width: 768px) and (max-width:1279px)"
              srcSet={zx7t_speakerImage}
            />
            <source media="(min-width: 1280px)" srcSet={zx7d_speakerImage} />
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

        <div className="flex flex-col md:my-4 md:flex-row md:gap-4 lg:w-full">
          <div className="my-2 lg:w-[50%]">
            <picture>
              <source media="(min-width: 1280px)" srcSet={yx1d_earphones} />
              <source
                media="(min-width: 768px) and (max-width: 1279px)"
                srcSet={yx1t_earphones}
              />
              <img
                src={yx1_earphones}
                alt="yx1 earphones"
                className="rounded-lg"
              />
            </picture>
          </div>

          <div className="my-2 w-full rounded-lg bg-neutral-200 px-6 py-10 md:flex md:flex-col md:justify-center md:px-8 lg:w-[50%]">
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
