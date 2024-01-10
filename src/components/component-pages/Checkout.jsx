import React from "react";
import GoBack from "../GoBack";
import data from "../../data.json";
import BillingDetails from "../BillingDetails";
import ShippingInfo from "../ShippingInfo";
import PaymentDetails from "../PaymentDetails";
import SummaryCard from "../SummaryCard";

function Checkout() {
  return (
    <>
      <section className="section-container xl:bg-neutral-200">
        <div className="mx-auto w-[85%] pt-4 lg:max-w-[1110px] lg:pt-10 xl:pb-20">
          <div className="mb-8">
            <GoBack />
          </div>

          <div className="xl:flex xl:w-full xl:gap-6">
            <div className="rounded-xl bg-neutral-000 px-8 py-8 xl:w-2/3">
              <h1 className="text-3xl font-bold uppercase">Checkout</h1>

              <BillingDetails />

              <ShippingInfo />

              <PaymentDetails />
            </div>

            <SummaryCard data={data[0]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
