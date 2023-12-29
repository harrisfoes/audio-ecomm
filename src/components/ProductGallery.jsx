import React from "react";

function ProductGallery({ productDetails }) {
  const baseUrl = "/audio-ecomm/";
  const imgUrl = (device, order) => {
    //console.log(productDetails.gallery["first"]["mobile"]);
    //console.log(`${productDetails.gallery[order][device].slice(1)}`);
    return `${baseUrl}${productDetails.gallery[order][device]}`;
  };
  //console.log(imgUrl("tablet", "first"), "papadoms");

  return (
    <>
      <div className="gallery flex flex-col gap-4 md:flex-row lg:my-12">
        <div className="flex flex-col gap-4 md:w-[43%] xl:gap-8">
          <picture>
            <source
              media="(min-width:768px) and (max-width:1279px)"
              srcSet={imgUrl("tablet", "first")}
            />
            <source
              media="(min-width: 1280px)"
              srcSet={imgUrl("desktop", "first")}
            />
            <img className="rounded-lg" src={imgUrl("mobile", "first")} />
          </picture>

          <picture>
            <source
              media="(min-width:768px) and (max-width:1279px)"
              srcSet={imgUrl("tablet", "second")}
            />
            <source
              media="(min-width: 1280px)"
              srcSet={imgUrl("desktop", "second")}
            />
            <img className="rounded-lg" src={imgUrl("mobile", "second")} />
          </picture>
        </div>

        <div className=" w-full md:w-[60%]">
          <picture>
            <source
              media="(min-width:768px) and (max-width:1279px)"
              srcSet={imgUrl("tablet", "third")}
            />
            <source
              media="(min-width: 1280px)"
              srcSet={imgUrl("desktop", "third")}
            />
            <img className="rounded-lg" src={imgUrl("mobile", "third")} />
          </picture>
        </div>
      </div>
    </>
  );
}

export default ProductGallery;
