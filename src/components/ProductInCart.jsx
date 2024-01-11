import React from "react";

function ProductInCart({ data }) {
  return (
    <>
      <div className="product-line flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <div className="max-w-[64px]">
            <img src={"/audio-ecomm/" + data.image.mobile.slice(1)} />
          </div>
          <div className="flex flex-col px-2">
            <div className="font-bold">{data.shortName}</div>
            <div className="text-sm font-bold opacity-50">
              {data.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>

        <div className="ticker flex h-10 items-center justify-center bg-neutral-200">
          <button className="px-2 opacity-50">-</button>
          <div className="flex w-8 justify-center  px-1 font-bold">1</div>
          <button className="px-2 opacity-50">+</button>
        </div>
      </div>
    </>
  );
}

export default ProductInCart;
