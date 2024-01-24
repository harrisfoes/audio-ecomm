import React from "react";

function BillingDetails({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
        Billing Details
      </div>

      <div className="md:flex md:flex-wrap md:justify-between md:gap-4">
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <div
            className={`${
              errors.name ? "text-error-red" : ""
            } flex justify-between text-xs font-bold`}
          >
            <label className="text-xs">Name</label>
            {errors.name && <div>{errors.name}</div>}
          </div>
          <input
            type="text"
            className={`${
              errors.name ? "border-error-red" : "border-neutral-400"
            }  w-full rounded-lg border px-4 py-4 font-bold text-neutral-900 hover:border-creamy-300 focus:border-creamy-900 focus:shadow-lg focus:outline-none`}
            placeholder="Alexei Ward"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <div
            className={`${
              errors.email ? "text-error-red" : ""
            } flex justify-between text-xs font-bold`}
          >
            <label className="text-xs font-bold">Email Address</label>
            {errors.email && <div>{errors.email}</div>}
          </div>
          <input
            type="email"
            className={`${
              errors.email ? "border-error-red" : "border-neutral-400"
            } w-full rounded-lg border px-4 py-4 font-bold text-neutral-900 hover:border-creamy-300 focus:border-creamy-900 focus:shadow-lg focus:outline-none`}
            name="email"
            placeholder="alexei@mail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 md:w-[48%]">
          <div
            className={`${
              errors.number ? "text-error-red" : ""
            } flex justify-between text-xs font-bold`}
          >
            <label className="text-xs font-bold">Phone Number</label>
            {errors.number && <div>{errors.number}</div>}
          </div>
          <input
            type="number"
            className={`${
              errors.number ? "border-error-red" : "border-neutral-400"
            } w-full rounded-lg border px-4 py-4 font-bold text-neutral-900 hover:border-creamy-300 focus:border-creamy-900 focus:shadow-lg focus:outline-none`}
            placeholder="+1202-555-0136"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default BillingDetails;
