import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Button from "../Button";
import GoBack from "../GoBack";
import HomeCategory from "../HomeCategory";
import AdCopy from "../AdCopy";
import ProductPageCard from "../ProductPageCard";
import ProductFeatures from "../ProductFeatures";
import ProductGallery from "../ProductGallery";
import ProductOther from "../ProductOther";

function ProductPage() {
  const { productId } = useParams();
  const productDetails = data.filter((items) => {
    return items.slug === productId;
  })[0];

  const baseUrl = "/audio-ecomm/";
  const imgUrl = (device) => {
    return `${baseUrl}${productDetails.image[device].slice(1)}`;
  };

  return (
    <>
      <section className="section-container">
        <div className="mx-auto w-[90%]  pt-4 lg:max-w-[1110px] lg:pt-10">
          <GoBack />

          <ProductPageCard productDetails={productDetails} />

          <ProductFeatures productDetails={productDetails} />

          <ProductGallery productDetails={productDetails} />

          <ProductOther productDetails={productDetails} />
        </div>
      </section>

      <HomeCategory />
      <AdCopy />
    </>
  );
}

export default ProductPage;
