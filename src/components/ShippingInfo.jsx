import React from "react";

function ShippingInfo({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="pb-2 pt-6 text-sm font-bold uppercase text-creamy-900">
        Shipping Info
      </div>

      <div className="mb-6">
        <div
          className={`${
            errors.address ? "text-error-red" : ""
          } flex justify-between text-xs font-bold`}
        >
          <label className="text-xs font-bold">Your Address</label>
          {errors.address && <div>{errors.address}</div>}
        </div>
        <input
          type="text"
          className={`${
            errors.address ? "border-error-red" : "border-neutral-400"
          } w-full rounded-lg border px-4 py-4 font-bold hover:border-creamy-900 focus:border-creamy-900 focus:shadow-lg focus:outline-none`}
          placeholder="1137 Williams Avenue"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="md:flex md:flex-wrap md:items-center md:justify-between md:gap-4">
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <div
            className={`${
              errors.zipcode ? "text-error-red" : ""
            } flex justify-between text-xs font-bold`}
          >
            <label className="text-xs font-bold">ZIP Code</label>
            {errors.zipcode && <div>{errors.zipcode}</div>}
          </div>

          <input
            type="number"
            className={`${
              errors.zipcode ? "border-error-red" : "border-neutral-400"
            } w-full rounded-lg border px-4 py-4 font-bold hover:border-creamy-900 focus:border-creamy-900 focus:shadow-lg focus:outline-none`}
            placeholder="10001"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 md:mb-0 md:w-[48%]">
          <div
            className={`${
              errors.city ? "text-error-red" : ""
            } flex justify-between text-xs font-bold`}
          >
            <label className="text-xs font-bold">City</label>
            {errors.city && <div>{errors.city}</div>}
          </div>
          <input
            type="text"
            className={`${
              errors.city ? "border-error-red" : "border-neutral-400"
            } w-full rounded-lg border px-4 py-4 font-bold hover:border-creamy-900 focus:border-creamy-900 focus:shadow-lg focus:outline-none`}
            placeholder="New York"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6 md:w-[48%]">
          <div
            className={`${
              errors.country ? "text-error-red" : ""
            } flex justify-between text-xs font-bold`}
          >
            <label className="text-xs font-bold">Country</label>
            {errors.country && <div>{errors.country}</div>}
          </div>
          <input
            type="text"
            className={`${
              errors.country ? "border-error-red" : "border-neutral-400"
            } w-full rounded-lg border px-4 py-4 font-bold hover:border-creamy-900 focus:border-creamy-900 focus:shadow-lg focus:outline-none`}
            placeholder="United States"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default ShippingInfo;
