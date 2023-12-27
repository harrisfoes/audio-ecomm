import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Button from "../Button";
import GoBack from "../GoBack";
import HomeCategory from "../HomeCategory";
import AdCopy from "../AdCopy";

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
                <h1 className="w-3/5 text-3xl font-bold uppercase">
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

          <div className="includes mb-6">
            <h1 className="py-2 text-2xl font-bold">IN THE BOX</h1>
            {productDetails[0].includes.map((items) => {
              return (
                <div key={items.item} className="flex gap-8 py-2">
                  <span className="font-bold text-creamy-900">
                    {items.quantity}x
                  </span>
                  <span className="opacity-50">{items.item}</span>
                </div>
              );
            })}
          </div>

          <div className="gallery">
            <img
              className="my-3 rounded-lg"
              src={baseUrl + productDetails[0].gallery.first.mobile.slice(1)}
            />
            <img
              className="my-3 rounded-lg"
              src={baseUrl + productDetails[0].gallery.second.mobile.slice(1)}
            />
            <img
              className="my-3 rounded-lg"
              src={baseUrl + productDetails[0].gallery.third.mobile.slice(1)}
            />
          </div>

          <div className="flex flex-col items-center justify-center py-6">
            <h1 className="mt-14 py-2 text-2xl font-bold uppercase">
              You may also like
            </h1>
            <div>
              {productDetails[0].others.map((items) => {
                console.log(baseUrl + items.image.mobile.slice(1));
                return (
                  <div
                    key={items.name}
                    className="my-4 flex flex-col items-center"
                  >
                    <img
                      className="my-6"
                      src={baseUrl + items.image.mobile.slice(1)}
                    />
                    <h1 className="py-2 text-center text-2xl font-bold uppercase">
                      {items.name}
                    </h1>
                    <div className="my-6 text-neutral-000">
                      <Button text="See Product" color="creamy-900" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <HomeCategory />
      <AdCopy />
    </>
  );
}

export default ProductPage;
