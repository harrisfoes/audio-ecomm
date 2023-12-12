import React from "react";
import Button from "./Button";
import zx9_speakerImage from "../assets/home/mobile/image-speaker-zx9.png";
import zx7_speakerImage from "../assets/home/mobile/image-speaker-zx7.jpg";
import yx1_earphones from "../assets/home/mobile/image-earphones-yx1.jpg";

function Featured() {
  return (
    <>
      <section className="flex flex-col items-center mt-14 mb-2 w-5/6 mx-auto">
        <div className="text-center pt-14 pb-10 bg-creamy-900 bg-circles bg-cover bg-bottom text-neutral-000 rounded-lg">
          <div className="max-w-[100px] mx-auto">
            <img src={zx9_speakerImage} alt="speaker image" />
          </div>
          <h1 className="uppercase text-4xl font-bold pt-6 px-10">
            ZX9 Speaker
          </h1>
          <div className="p-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </div>
          <Button text="See Product" color="black" />
        </div>

        <div className="bg-neutral-200 rounded-lg my-2 relative">
          <img
            src={zx7_speakerImage}
            alt="zx7 speaker"
            className="rounded-lg"
          />
          <div className="absolute top-[30%] px-6 md:left-[16%]">
            <h2 className="uppercase text-3xl font-bold pb-6">ZX7 Speaker</h2>
            <Button text="See Product" color="transparent" />
          </div>
        </div>

        <div className="my-2">
          <img src={yx1_earphones} alt="yx1 earphones" className="rounded-lg" />
        </div>

        <div className="my-2 bg-neutral-200 px-6 py-10 w-full rounded-lg">
          <h2 className="uppercase text-3xl font-bold pb-6">YX1 Earphones</h2>
          <Button text="See Product" color="transparent" />
        </div>
      </section>
    </>
  );
}

export default Featured;
