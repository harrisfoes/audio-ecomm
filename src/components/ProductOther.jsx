import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function ProductOther({ productDetails }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-6 lg:pt-10">
        <h1 className="mt-14 py-2 text-2xl font-bold uppercase lg:text-3xl">
          You may also like
        </h1>

        <div className="gap-2 md:flex md:flex-row">
          {productDetails.others.map((items) => {
            const baseUrl = "/audio-ecomm/";
            const imgUrl = (device) => {
              return `${baseUrl}${items.image[device].slice(1)}`;
            };

            return (
              <div key={items.name} className="my-4 flex flex-col items-center">
                <picture>
                  <source
                    media="(min-width:768px) and (max-width:1279px)"
                    srcSet={imgUrl("tablet")}
                  />
                  <source
                    media="(min-width: 1280px)"
                    srcSet={imgUrl("desktop")}
                  />
                  <img className="my-6" src={imgUrl("mobile")} />
                </picture>
                <h1 className="py-2 text-center text-2xl font-bold uppercase">
                  {items.name}
                </h1>
                <div className="my-6 text-neutral-000">
                  <Link to={"/product/" + items.slug}>
                    <Button text="See Product" color="creamy-900" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductOther;
