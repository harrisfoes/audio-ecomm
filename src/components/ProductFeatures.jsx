import React from "react";

function ProductFeatures({ productDetails }) {
  return (
    <>
      <div className="lg:my-4 lg:flex lg:gap-12 lg:py-16">
        <div className="product-feature py-8 md:py-14 lg:w-3/5 lg:py-0">
          <h1 className="text-2xl font-bold md:text-3xl">FEATURES</h1>
          <p className="py-4 opacity-50 lg:leading-relaxed">
            {productDetails.features.split("\n")[0]}
          </p>
          <p className="py-4 opacity-50 lg:leading-relaxed">
            {productDetails.features.split("\n")[2]}
          </p>
        </div>

        <div className="includes mb-16 md:flex md:justify-between lg:w-2/5 lg:flex-col lg:justify-start">
          <h1 className=" py-2 text-2xl font-bold md:text-3xl">IN THE BOX</h1>
          <div className="md:w-1/2 lg:w-full">
            {productDetails.includes.map((items) => {
              return (
                <div key={items.item} className="flex gap-8  py-2">
                  <span className="font-bold text-creamy-900">
                    {items.quantity}x
                  </span>
                  <span className="opacity-50">{items.item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFeatures;
