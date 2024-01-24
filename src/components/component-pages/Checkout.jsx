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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    payment: "",
    eMoneyNum: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    const numberRegex = /^[0-9]+$/;
    if (!numberRegex.test(formData.number)) {
      newErrors.number = "Invalid format";
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Shipping address required";
    }

    if (!numberRegex.test(formData.zipcode)) {
      newErrors.zipcode = "Invalid format";
    }

    if (formData.city.trim() === "") {
      newErrors.city = "City required";
    }

    if (formData.country.trim() === "") {
      newErrors.country = "Country required";
    }

    if (formData.payment === "") {
      newErrors.payment = "Please select one";
    }

    if (formData.payment === "eMoney") {
      if (!numberRegex.test(formData.eMoneyNum)) {
        newErrors.eMoneyNum = "Invalid Format";
      }
      if (!numberRegex.test(formData.eMoneyPin)) {
        newErrors.eMoneyPin = "Invalid Format";
      }
    }

    console.log(newErrors);
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmPay = () => {
    console.log(errors, "before confirm pay");
    if (!validateForm()) {
      console.log(errors);
      return;
    }

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

              <BillingDetails
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <ShippingInfo
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <PaymentDetails
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
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
