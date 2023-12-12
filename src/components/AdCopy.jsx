import React from "react";
import personImage from "../assets/shared/mobile/image-best-gear.jpg";
import personImage_t from "../assets/shared/tablet/image-best-gear.jpg";

function AdCopy() {
  return (
    <section className="m-16 mx-auto w-5/6 text-center">
      <picture>
        <source media="(min-width:768px)" srcSet={personImage_t} />
        <img src={personImage} alt="person listening" className="rounded-lg" />
      </picture>
      <div className="md:mx-auto md:w-[78%]">
        <h2 className="py-12 text-3xl font-bold uppercase md:text-4xl">
          Bringing you the <span className="text-creamy-900">best</span> audio
          gear
        </h2>
        <p className="opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

export default AdCopy;
