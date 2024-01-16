import React from "react";
import { Link } from "react-router-dom";
import iconConfirm from "../assets/checkout/icon-order-confirmation.svg";
import data from "../data.json";

function OrderThanks({ products, grandTotal, handleBackToHome }) {
  console.log(products);
  console.log(data);
  const productToDisplay = data.filter(
    (items) => items.id === products[0].id,
  )[0];
  console.log(productToDisplay);

  const backToHome = () => {
    handleBackToHome();
    console.log("astt");
  };

  return (
    <>
      <div className="ordersuccess w-[540px] rounded-lg bg-neutral-000 p-8 md:p-10">
        <div>
          <img src={iconConfirm} />
        </div>
        <h1 className="py-4 text-3xl font-bold uppercase leading-10 tracking-wide md:py-10">
          Thank you <br />
          for your order
        </h1>
        <p className="opacity-50 md:pb-4">
          You will receive an email confirmation shortly.
        </p>

        <div className="product-totals mt-4 flex flex-col rounded-lg bg-neutral-200 pt-4 md:mb-8  md:flex-row  md:justify-evenly md:py-0">
          <div className="flex flex-col items-center md:w-[55%]">
            <div className="product-line flex w-full items-start justify-between md:items-center md:rounded-l-lg md:pt-4">
              <div className="md:py-18 mb-2 flex w-2/3 items-center justify-evenly md:w-full">
                <div className="max-w-[64px]">
                  <img
                    className="rounded-lg"
                    src={
                      "/audio-ecomm/" + productToDisplay.image.mobile.slice(1)
                    }
                  />
                </div>
                <div className="flex flex-col px-2">
                  <div className="whitespace-nowrap font-bold">
                    {productToDisplay.shortName}
                  </div>
                  <div className="text-sm font-bold opacity-50">
                    {productToDisplay.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-2 w-1/4 font-bold opacity-50 md:w-1/3">
                x{products[0].amount}
              </div>
            </div>
            {products.length > 1 && (
              <>
                <div className="mx-auto my-2 h-[0.09rem] w-[70%] bg-neutral-800 opacity-20"></div>
                <div className="mx-auto my-4 font-bold opacity-50">
                  and {products.length - 1} other item(s)
                </div>
              </>
            )}
          </div>

          <div className="rounded-b-lg bg-neutral-900 text-neutral-000  md:flex md:w-[45%] md:flex-col md:justify-center md:rounded-r-lg md:rounded-bl-none md:px-6">
            <div className=" whitespace-nowrap  px-8 pt-4 uppercase opacity-50 md:px-0">
              Grand Total
            </div>
            <div className="px-8 pb-4 pt-2 text-xl font-bold md:px-0">
              {grandTotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>
        <Link to="/audio-ecomm/">
          <button
            onClick={backToHome}
            className="my-4 w-full bg-creamy-900 py-6 font-bold uppercase text-neutral-000 hover:bg-creamy-300"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default OrderThanks;
