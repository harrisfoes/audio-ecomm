import React, { useContext } from "react";
import data from "../data.json";
import { ProductContext } from "./contexts/ProductContext";

const ProductLine = ({ productData }) => {
  const thisProductData = data.filter(
    (items) => items.id === productData.id,
  )[0];

  return (
    <div className="product-line flex items-center justify-between py-2">
      <div className="mb-2 flex items-center gap-2">
        <div className="max-w-[64px]">
          <img
            className="rounded-lg"
            src={"/audio-ecomm/" + thisProductData.image.mobile.slice(1)}
          />
        </div>
        <div className="flex flex-col px-2">
          <div className="font-bold">{thisProductData.shortName}</div>
          <div className="text-sm font-bold opacity-50">
            {thisProductData.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </div>
        </div>
      </div>

      <div className="font-bold opacity-50">x{productData.amount}</div>
    </div>
  );
};

function SummaryCard({ handleConfirmPay, retrieveTotalPrice }) {
  const { products } = useContext(ProductContext);
  const shippingPrice = 50;

  const totalPrice = products.reduce((accum, items) => {
    const thisItem = data.filter((dataItem) => dataItem.id === items.id)[0]
      .price;
    return accum + items.amount * thisItem;
  }, 0);

  const vatPrice = products.reduce((accum, items) => {
    const thisItem =
      data.filter((dataItem) => dataItem.id === items.id)[0].price * 0.05;
    return accum + items.amount * thisItem;
  }, 0);

  const grandTotal = totalPrice + shippingPrice;

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  };

  const handleSubmit = () => {
    retrieveTotalPrice(grandTotal);
    handleConfirmPay();
  };

  return (
    <>
      <div className="summary-card xl:h-contain rounded-lg bg-neutral-000 py-8 md:px-8 xl:h-fit xl:w-1/3">
        <h1 className="text-xl font-bold uppercase">Summary</h1>

        {products.map((items) => (
          <ProductLine key={items.id} productData={items} />
        ))}

        <div className="price-summary my-10 bg-neutral-000">
          <div className="my-4 flex justify-between">
            <div className="font-medium uppercase opacity-50">Total</div>
            <div className="font-bold">{formatPrice(totalPrice)}</div>
          </div>
          <div className="my-4 flex justify-between">
            <div className="font-medium uppercase opacity-50">Shipping</div>
            <div className="font-bold">{formatPrice(shippingPrice)}</div>
          </div>
          <div className="my-4 flex justify-between">
            <div className="font-medium uppercase opacity-50">
              VAT (Included)
            </div>
            <div className="font-bold">{formatPrice(vatPrice)}</div>
          </div>

          <div className="my-4 flex items-center justify-between ">
            <div className="font-medium uppercase opacity-50">Grand Total</div>
            <div className="my-6 font-bold text-creamy-900">
              {formatPrice(grandTotal)}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-creamy-900 p-4 font-bold uppercase text-neutral-000 hover:bg-creamy-300"
          >
            Continue & Pay
          </button>
        </div>
      </div>
    </>
  );
}

export default SummaryCard;
