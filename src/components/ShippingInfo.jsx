import React from "react";

function ShippingInfo() {
  return (
    <>
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

      <div className="md:flex md:flex-wrap md:justify-between md:gap-4">
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <label className="text-xs font-bold">ZIP Code</label>
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
            placeholder="10001"
          />
        </div>
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <label className="text-xs font-bold">City</label>
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
            placeholder="New York"
          />
        </div>
        <div className="mb-6 md:w-[48%]">
          <label className="text-xs font-bold">Country</label>
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
            placeholder="United States"
          />
        </div>
      </div>
    </>
  );
}

export default ShippingInfo;
