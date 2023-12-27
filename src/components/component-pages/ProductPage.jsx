import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Button from "../Button";
import GoBack from "../GoBack";

function ProductPage() {
  const { productId } = useParams();
  const productDetails = data.filter((items) => {
    return items.slug === productId;
  });
  console.log(productId);
  console.log(productDetails);

  const baseUrl = "/audio-ecomm/";

  return (
    <>
      <section className="section-container">
        <div className="mx-auto w-[90%] pt-4">
          <GoBack />

          <div className="product-card">
            <div className="pt-4">
              <img src={baseUrl + productDetails[0].image.mobile.slice(1)} />
            </div>
            <div>
              <div className="productText py-2">
                {productDetails[0].new && (
                  <h2 className="py-4 uppercase tracking-[0.5rem] text-creamy-900">
                    New Product
                  </h2>
                )}
                <h1 className="w-1/2 text-3xl font-bold uppercase">
                  {productDetails[0].name}
                </h1>
                <p className="pt-4 opacity-50">
                  {productDetails[0].description}
                </p>
              </div>
              <div className="priceSection py-2">
                <h2 className="my-4 text-2xl font-bold tracking-widest">
                  {productDetails[0].price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </h2>
                <div className="add-to-cart flex ">
                  <div className="flex gap-4 p-2">
                    <div className="ticker flex bg-neutral-200">
                      <button className="px-4 opacity-50">-</button>
                      <div className="flex items-center px-4 font-bold">1</div>
                      <button className="px-4 opacity-50">+</button>
                    </div>
                    <div className="text-neutral-000">
                      <Button text="Add to cart" color="creamy-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-feature py-8">
            <h1 className="text-2xl font-bold">FEATURES</h1>
            <p className="py-4 opacity-50">
              {productDetails[0].features.split("\n")[0]}
            </p>
            <p className="py-4 opacity-50">
              {productDetails[0].features.split("\n")[2]}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
