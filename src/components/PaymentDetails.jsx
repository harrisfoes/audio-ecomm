import React, { useState } from "react";
import cod from "../assets/checkout/icon-cash-on-delivery.svg";

function PaymentDetails() {
  const [isCod, setIsCod] = useState(false);
  return (
    <>
      <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
        Payment Details
      </div>

      <div className="md:flex md:flex-wrap md:justify-between  md:gap-4">
        <p className="text-xs font-bold md:w-[48%]">Payment Method</p>
        {/* TODO(harris) work on orange background when clicked once we do funcs */}
        <div className=" md:w-[48%]">
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#9C9C9C] px-3 py-4 hover:border-creamy-900 hover:shadow-md">
            <label
              htmlFor="payment-1"
              className="block h-full w-full font-bold"
            >
              <input
                onClick={() => setIsCod(false)}
                id="payment-1"
                type="radio"
                name="payment-method"
                value="1"
                className="mx-2 h-4 w-4 border bg-creamy-900 accent-creamy-900 focus:ring-creamy-900"
              />
              e-Money
            </label>
          </div>
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#9C9C9C] px-3 py-4 hover:border-creamy-900 hover:shadow-md">
            <label
              htmlFor="payment-2"
              className="block h-full w-full font-bold"
            >
              <input
                onClick={() => setIsCod(true)}
                id="payment-2"
                type="radio"
                name="payment-method"
                value="2"
                className="mx-2 h-4 w-4 accent-creamy-900 focus:ring-creamy-900"
              />
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>

      {isCod ? (
        <div className="flex gap-6 p-4">
          <img src={cod} />
          <p className="opacity-50">
            The 'Cash on Delivery' option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      ) : (
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:w-[48%]">
            <label className="text-xs font-bold">e-Money Number</label>
            <input
              type="number"
              className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
              placeholder="238521993"
            />
          </div>
          <div className="mb-6 md:w-[48%]">
            <label className="text-xs font-bold">e-Money PIN</label>
            <input
              type="number"
              className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
              placeholder="6891"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentDetails;
