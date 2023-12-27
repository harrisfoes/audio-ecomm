import React from "react";
import personImage from "../../public/assets/shared/mobile/image-best-gear.jpg";
import personImage_t from "../../public/assets/shared/tablet/image-best-gear.jpg";
import personImage_d from "../../public/assets/shared/desktop/image-best-gear.jpg";

function AdCopy() {
  return (
    <section className="mx-auto my-16 w-[90%] text-center md:max-w-[690px] lg:my-36 lg:max-w-[1110px] xl:flex xl:flex-row-reverse xl:justify-between">
      <div className="xl:w-1/2">
        <picture>
          <source media="(min-width:1280px)" srcSet={personImage_d} />
          <source
            media="(min-width:768px) and (max-width:1279px)"
            srcSet={personImage_t}
          />
          <img
            src={personImage}
            alt="person listening"
            className="rounded-lg"
          />
        </picture>
      </div>

      <div className="xl:flex xl:w-1/2 xl:flex-col xl:justify-center xl:text-left">
        <div className="md:mx-auto md:w-[78%] xl:mx-0 ">
          <h2 className="py-12 text-3xl font-bold uppercase md:text-4xl xl:text-[40px]">
            Bringing you the <span className="text-creamy-900">best</span> audio
            gear
          </h2>
          <p className="opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdCopy;
