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
      <div className="ordersuccess max-w-[540px] rounded-lg bg-neutral-000 p-8">
        <div>
          <img src={iconConfirm} />
        </div>
        <h1 className="py-4 text-3xl font-bold uppercase leading-10 tracking-wide">
          Thank you for your order
        </h1>
        <p className="opacity-50">
          You will receive an email confirmation shortly.
        </p>

        <div className="product-totals mt-4 flex flex-col rounded-lg bg-neutral-200 pt-4">
          <div className="product-line flex items-start justify-between bg-neutral-200">
            <div className="mb-2 flex w-2/3 items-center justify-evenly">
              <div className="max-w-[64px]">
                <img
                  className="rounded-lg"
                  src={"/audio-ecomm/" + productToDisplay.image.mobile.slice(1)}
                />
              </div>
              <div className="flex flex-col px-2">
                <div className="font-bold">{productToDisplay.shortName}</div>
                <div className="text-sm font-bold opacity-50">
                  {productToDisplay.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>

            <div className="mt-2 w-1/5 font-bold opacity-50">
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
          <div className="rounded-b-lg bg-neutral-900 text-neutral-000">
            <div className="px-8 py-4 text-xl font-semibold uppercase opacity-50">
              Grand Total
            </div>
            <div className="px-8 pb-6 text-2xl font-bold">${grandTotal}</div>
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
