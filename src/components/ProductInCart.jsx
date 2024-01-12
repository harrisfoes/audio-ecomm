import React from "react";
import data from "../data.json";

function ProductInCart({ productData }) {
  const thisProductData = data.filter(
    (items) => items.id === productData.id,
  )[0];

  return (
    <>
      <div className="product-line flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <div className="max-w-[64px]">
            <img
              src={"/audio-ecomm/" + thisProductData.image.mobile.slice(1)}
            />
          </div>
          <div className="flex flex-col px-2">
            <div className="font-bold">{thisProductData.shortName}</div>
            <div className="text-sm font-bold opacity-50">
              {thisProductData.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>

        <div className="ticker flex h-10 items-center justify-center bg-neutral-200">
          <button className="px-2 opacity-50">-</button>
          <div className="flex w-8 justify-center  px-1 font-bold">
            {productData.amount}
          </div>
          <button className="px-2 opacity-50">+</button>
        </div>
      </div>
    </>
  );
}

export default ProductInCart;
