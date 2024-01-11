import React from "react";

function BillingDetails() {
  return (
    <>
      <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
        Billing Details
      </div>

      <div className="md:flex md:flex-wrap md:justify-between md:gap-4">
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <label className="text-xs font-bold">Name</label>
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
            placeholder="Alexei Ward"
          />
        </div>
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <label className="text-xs font-bold">Email Address</label>
          <input
            type="email"
            className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
            placeholder="alexei@mail.com"
          />
        </div>
        <div className="mb-6 md:w-[48%]">
          <label className="text-xs font-bold">Phone Number</label>
          <input
            type="number"
            className="w-full rounded-lg border px-4 py-4 font-bold text-[#9C9C9C] focus:outline-none"
            placeholder="+1202-555-0136"
          />
        </div>
      </div>
    </>
  );
}

export default BillingDetails;
