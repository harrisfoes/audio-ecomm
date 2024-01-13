import React, { useState, useContext } from "react";
import Button from "./Button";
import { ProductContext } from "./contexts/ProductContext";

function ProductPageCard({ productDetails }) {
  const [amount, setAmount] = useState(1);
  const { products, updateProducts } = useContext(ProductContext);
  const baseUrl = "/audio-ecomm/";

  const imgUrl = (device) => {
    return `${baseUrl}${productDetails.image[device].slice(1)}`;
  };

  const addAmount = () => {
    setAmount((amount) => amount + 1);
  };
  const subtractAmount = () => {
    if (amount > 1) {
      setAmount((amount) => amount - 1);
    }
  };

  console.log(products);

  const handleAddToCart = () => {
    const thisProductID = productDetails.id;
    /*
    if product is empty, add the item there
    check if id already exists, if so, add the amount there
    if id doesn't exist, add it there
    */
    console.log("handle");

    const idExists = products.filter((item) => item.id === thisProductID);
    console.log(products);
    console.log(idExists);

    if (idExists.length > 0) {
      console.log("id exists");
      console.log(idExists);

      updateProducts(
        products.map((item) => {
          if (item.id === thisProductID) {
            return { ...item, amount };
          }
          return item;
        }),
      );
    } else {
      console.log("new product");
      updateProducts([...products, { id: thisProductID, amount: amount }]);
    }

    //reset amout to default after adding item to cart
    setAmount(1);
  };

  return (
    <>
      <div className="product-card lg:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-20 lg:gap-28">
          <div className="py-4 md:w-1/2">
            <picture>
              <source
                media="(min-width:768px) and (max-width:1279px)"
                srcSet={imgUrl("tablet")}
              />
              <source media="(min-width: 1280px)" srcSet={imgUrl("desktop")} />
              <img src={imgUrl("mobile")} className="rounded-lg" />
            </picture>
          </div>

          <div className="md:w-3/5 lg:w-1/2">
            <div className="productText py-2">
              {productDetails.new && (
                <h2 className="py-4 uppercase tracking-[0.5rem] text-creamy-900">
                  New Product
                </h2>
              )}
              <h1 className="w-7/12 py-4 text-3xl font-bold uppercase lg:text-4xl">
                {productDetails.name}
              </h1>
              <p className="pt-4 leading-relaxed opacity-50 lg:w-4/5">
                {productDetails.description}
              </p>
            </div>
            <div className="priceSection py-2">
              <h2 className="my-4 text-2xl font-bold tracking-widest">
                {productDetails.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
              </h2>
              <div className="add-to-cart flex ">
                <div className="flex gap-6 p-2">
                  <div className="ticker flex bg-neutral-200">
                    <button
                      className="px-4 opacity-50"
                      onClick={subtractAmount}
                    >
                      -
                    </button>
                    <div className="flex w-10 items-center px-4 font-bold">
                      {amount}
                    </div>
                    <button className="px-4 opacity-50" onClick={addAmount}>
                      +
                    </button>
                  </div>
                  <div className="text-neutral-000">
                    <button
                      className="mx-auto h-[48px] w-[160px] bg-creamy-900 text-[13px] font-bold uppercase tracking-wider hover:bg-creamy-300"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPageCard;
