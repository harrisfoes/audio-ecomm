import React, { useState } from "react";
import cod from "../assets/checkout/icon-cash-on-delivery.svg";

function PaymentDetails({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
        Payment Details
      </div>

      <div className="md:flex md:flex-wrap md:justify-between  md:gap-4">
        <div className="flex justify-between text-xs font-bold md:w-[48%]">
          <div>Payment Method</div>
          {errors.payment && (
            <div className="text-error-red">{errors.payment}</div>
          )}
        </div>
        {/* TODO(harris) work on orange background when clicked once we do funcs */}
        <div className=" md:w-[48%]">
          <div className="mb-6 flex items-center gap-2 rounded-lg hover:border-creamy-900 hover:shadow-md">
            <label
              htmlFor="e-money"
              className={`${
                formData.payment === "eMoney"
                  ? "border-creamy-900"
                  : "border-neutral-400"
              }  block h-full w-full rounded-lg border px-3 py-4 font-bold`}
            >
              <input
                onChange={handleChange}
                id="e-money"
                type="radio"
                name="payment"
                value="eMoney"
                checked={formData.payment === "eMoney"}
                className="mx-2 h-4 w-4 border bg-creamy-900 accent-creamy-900 focus:ring-creamy-900"
              />
              e-Money
            </label>
          </div>
          <div className="mb-6 flex items-center gap-2 rounded-lg  hover:border-creamy-900 hover:shadow-md ">
            <label
              htmlFor="cod"
              className={`${
                formData.payment === "cod"
                  ? "border-creamy-900"
                  : "border-neutral-400"
              }  block h-full w-full rounded-lg border px-3 py-4 font-bold`}
            >
              <input
                onChange={handleChange}
                id="cod"
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                className="mx-2 h-4 w-4 accent-creamy-900 focus:ring-creamy-900"
              />
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>

      {formData.payment === "cod" ? (
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
            <div
              className={`${
                errors.eMoneyNum ? "text-error-red" : ""
              } flex justify-between text-xs`}
            >
              <label className="text-xs font-bold">e-Money Number</label>
              {errors.eMoneyNum && <div>{errors.eMoneyNum}</div>}
            </div>
            <input
              type="number"
              name="eMoneyNum"
              className={`${
                errors.eMoneyNum ? "border-error-red" : "border-neutral-400"
              } w-full rounded-lg border px-4 py-4 font-bold  focus:outline-none`}
              placeholder="238521993"
              value={formData.eMoneyNum}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 md:w-[48%]">
            <div
              className={`${
                errors.eMoneyPin ? "text-error-red" : ""
              } flex justify-between text-xs`}
            >
              <label className="text-xs font-bold">e-Money Pin</label>
              {errors.eMoneyPin && <div>{errors.eMoneyPin}</div>}
            </div>
            <input
              type="number"
              name="eMoneyPin"
              className={`${
                errors.eMoneyPin ? "border-error-red" : "border-neutral-400"
              } w-full rounded-lg border px-4 py-4 font-bold  focus:outline-none`}
              placeholder="6891"
              value={formData.eMoneyPin}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentDetails;
