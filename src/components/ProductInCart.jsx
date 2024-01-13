import { useState, useContext, useEffect } from "react";
import data from "../data.json";
import { ProductContext } from "./contexts/ProductContext";

function ProductInCart({ productData }) {
  const [amount, setAmount] = useState(productData.amount);
  const { products, updateProducts } = useContext(ProductContext);

  const thisProductData = data.filter(
    (items) => items.id === productData.id,
  )[0];

  useEffect(() => {
    const updatedAmounts = products.map((item) => {
      console.log(amount);
      if (item.id === productData.id) {
        return { ...item, amount };
      }
      return item;
    });

    const updatedAmountsRemoveEmpty = updatedAmounts.filter(
      (item) => item.amount !== 0,
    );

    updateProducts(updatedAmountsRemoveEmpty);
  }, [amount]);

  const handleIncreaseAmount = () => {
    setAmount(amount + 1);
    //increaseAmount(productData.id);
    //updateProductAmount({ id: productData.id, amount: amount });
    console.log("hoy");
    console.log(amount);
  };

  const handleDecreaseAmount = () => {
    if (amount != 0) {
      setAmount((amount) => amount - 1);
    }
    //updateProductAmount({ id: productData.id, amount: amount });
  };

  return (
    <>
      <div className="product-line flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <div className="max-w-[64px]">
            <img
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

        <div className="ticker flex h-10 items-center justify-center bg-neutral-200">
          <button className="px-2 opacity-50" onClick={handleDecreaseAmount}>
            -
          </button>
          <div className="flex w-8 justify-center  px-1 font-bold">
            {amount}
          </div>
          <button className="px-2 opacity-50" onClick={handleIncreaseAmount}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductInCart;
