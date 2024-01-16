import React, { useState, useContext } from "react";
import GoBack from "../GoBack";
import data from "../../data.json";
import BillingDetails from "../BillingDetails";
import ShippingInfo from "../ShippingInfo";
import PaymentDetails from "../PaymentDetails";
import SummaryCard from "../SummaryCard";
import OrderThanks from "../OrderThanks";
import ScrollToTop from "../utils/ScrollToTop";
import { ProductContext } from "../contexts/ProductContext";

function Checkout() {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [grandTotalPrice, setGrandTotalPrice] = useState(0);
  const { products, updateProducts } = useContext(ProductContext);
  const handleConfirmPay = () => {
    setOpenConfirmModal(true);
  };
  const retrieveTotalPrice = (price) => {
    setGrandTotalPrice(price);
  };
  const handleBackToHome = () => {
    updateProducts([]);
    console.log("out");
    setOpenConfirmModal(false);
  };
  return (
    <>
      <section className="section-container relative xl:bg-neutral-200">
        {openConfirmModal && (
          <>
            <ScrollToTop />
            <div className="absolute z-20 h-full w-full bg-neutral-800 opacity-50"></div>

            <div className="absolute inset-0 top-0 z-40 flex h-fit w-full items-center justify-center p-2">
              <OrderThanks
                products={products}
                grandTotal={grandTotalPrice}
                handleBackToHome={handleBackToHome}
              />
            </div>
          </>
        )}
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

            <SummaryCard
              handleConfirmPay={handleConfirmPay}
              retrieveTotalPrice={retrieveTotalPrice}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
