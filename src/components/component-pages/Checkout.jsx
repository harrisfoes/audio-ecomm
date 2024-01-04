import React from "react";
import GoBack from "../GoBack";
import data from "../../data.json";

function Checkout() {
  return (
    <>
      <section className="section-container">
        <div className="mx-auto w-[85%]  pt-4 lg:max-w-[1110px] lg:pt-10">
          <GoBack />

          <div className="px-2 py-8">
            <h1 className="text-3xl font-bold uppercase">Checkout</h1>

            <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
              Billing Details
            </div>

            <div className="mb-6">
              <label className="text-xs font-bold">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="Alexei Ward"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-bold">Email Address</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="alexei@mail.com"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-bold">Phone Number</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="+1202-555-0136"
              />
            </div>

            <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
              Shipping Info
            </div>

            <div className="mb-6">
              <label className="text-xs font-bold">Your Address</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="1137 Williams Avenue"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-bold">ZIP Code</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="10001"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-bold">City</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="New York"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-bold">Country</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="United States"
              />
            </div>

            <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
              Payment Details
            </div>

            <p className="text-xs font-bold">Payment Method</p>
            <div className="mb-6 flex items-center gap-2 rounded-lg border px-3 py-4">
              <input
                id="payment-1"
                type="radio"
                name="payment-method"
                className="h-4 w-4 accent-creamy-900 focus:ring-2 focus:ring-creamy-900"
              />
              <label htmlFor="payment-1 font-bold block">e-Money</label>
            </div>
            <div className="mb-6 flex items-center gap-2 rounded-lg border px-3 py-4">
              <input
                id="payment-2"
                type="radio"
                name="payment-method"
                className="h-4 w-4 accent-creamy-900 focus:ring-2 focus:ring-creamy-900"
              />
              <label htmlFor="payment-2 font-bold block">
                Cash on Delivery
              </label>
            </div>

            <div className="mb-6">
              <label className="text-xs font-bold">e-Money Number</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="238521993"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-bold">e-Money PIN</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
                placeholder="6891"
              />
            </div>
          </div>

          <div className="summary-card">
            <h1 className="text-xl font-bold uppercase">Summary</h1>
            <div className="product-line flex items-center justify-between py-2">
              <div className="mb-2 flex items-center gap-2">
                <div className="max-w-[64px]">
                  <img
                    className="rounded-lg"
                    src={"/audio-ecomm/" + data[0].image.mobile.slice(1)}
                  />
                </div>
                <div className="flex flex-col px-2">
                  <div className="font-bold">{data[0].shortName}</div>
                  <div className="text-sm font-bold opacity-50">
                    {data[0].price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    })}
                  </div>
                </div>
              </div>

              <div className="font-bold opacity-50">x2</div>
            </div>
          </div>

          <div className="price-summary mb-10">
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
              <div className="font-medium uppercase opacity-50">
                Grand Total
              </div>
              <div className="my-6 font-bold text-creamy-900">$ 5,446</div>
            </div>

            <button className="w-full bg-creamy-900 p-4 font-bold uppercase text-neutral-000 hover:bg-creamy-300">
              Continue & Pay
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
