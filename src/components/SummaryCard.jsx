import React from "react";

function SummaryCard({ data }) {
  return (
    <>
      <div className="summary-card xl:h-contain rounded-lg bg-neutral-000 py-8 md:px-8 xl:h-fit xl:w-1/3">
        <h1 className="text-xl font-bold uppercase">Summary</h1>
        <div className="product-line flex items-center justify-between py-2">
          <div className="mb-2 flex items-center gap-2">
            <div className="max-w-[64px]">
              <img
                className="rounded-lg"
                src={"/audio-ecomm/" + data.image.mobile.slice(1)}
              />
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

          <div className="font-bold opacity-50">x2</div>
        </div>

        <div className="price-summary my-10 bg-neutral-000">
          <div className="my-4 flex justify-between">
            <div className="font-medium uppercase opacity-50">Total</div>
            <div className="font-bold">$ 5,396</div>
          </div>
          <div className="my-4 flex justify-between">
            <div className="font-medium uppercase opacity-50">Shipping</div>
            <div className="font-bold">$ 50</div>
          </div>
          <div className="my-4 flex justify-between">
            <div className="font-medium uppercase opacity-50">
              VAT (Included)
            </div>
            <div className="font-bold">$ 1,079</div>
          </div>

          <div className="my-4 flex items-center justify-between ">
            <div className="font-medium uppercase opacity-50">Grand Total</div>
            <div className="my-6 font-bold text-creamy-900">$ 5,446</div>
          </div>

          <button className="w-full bg-creamy-900 p-4 font-bold uppercase text-neutral-000 hover:bg-creamy-300">
            Continue & Pay
          </button>
        </div>
      </div>
    </>
  );
}

export default SummaryCard;
