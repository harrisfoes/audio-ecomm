import React from "react";

function PaymentDetails() {
  return (
    <>
      <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
        Payment Details
      </div>

      <div className="md:flex md:flex-wrap md:justify-between  md:gap-4">
        <p className="text-xs font-bold md:w-[48%]">Payment Method</p>
        {/* TODO(harris) work on orange background when clicked once we do funcs */}
        <div className=" md:w-[48%]">
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#9C9C9C] px-3 py-4">
            <label
              htmlFor="payment-1"
              className="block h-full w-full font-bold"
            >
              <input
                id="payment-1"
                type="radio"
                name="payment-method"
                className="mx-2 h-4 w-4 accent-creamy-900 focus:ring-2 focus:ring-creamy-900"
              />
              e-Money
            </label>
          </div>
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-[#9C9C9C] px-3 py-4">
            <label
              htmlFor="payment-2"
              className="block h-full w-full font-bold"
            >
              <input
                id="payment-2"
                type="radio"
                name="payment-method"
                className="mx-2 h-4 w-4 accent-creamy-900 focus:ring-2 focus:ring-creamy-900"
              />
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default PaymentDetails;
