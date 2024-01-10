import React, { useState } from "react";
import CartImage from "../assets/shared/desktop/icon-cart.svg";
import data from "../data.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductContext";
import ProductInCart from "./ProductInCart";

function Cart({ toggleMenu, cartIsOpen }) {
  /*
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    //document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  */

  const productsInCart = useContext(ProductContext);
  //console.log(data[0].image.mobile.slice(1));
  console.log(data);
  console.log(productsInCart);

  document.body.style.overflow = cartIsOpen ? "hidden" : "auto";

  return (
    <>
      <button onClick={toggleMenu} className="relative cursor-pointer">
        <img
          src={CartImage}
          alt="cart-image"
          className="flex-shrink-0 cursor-pointer"
        />
      </button>

      {cartIsOpen && (
        <>
          <div
            className="absolute left-0 top-20 z-50 h-full w-screen bg-neutral-900 opacity-50"
            onClick={toggleMenu}
          ></div>

          <div className="absolute top-20 mx-auto w-full xl:max-w-[1100px]">
            <div className="cart-items-component absolute top-8 z-50 mx-3 w-[85%] max-w-[400px] rounded-lg bg-neutral-000 p-5 sm:left-auto sm:right-16 xl:right-0">
              <div className="top-line flex items-end justify-between py-2">
                <h1 className="text-lg font-bold uppercase tracking-wider">
                  Cart (0)
                </h1>
                <button className="underline opacity-50 hover:text-creamy-900">
                  Remove all
                </button>
              </div>

              <div className="py-8 text-center font-medium opacity-50">
                The cart is empty
              </div>

              {/*products*/}

              <ProductInCart data={data[0]} />

              <div className="product-line flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <div className="max-w-[64px]">
                    <img
                      src={"/audio-ecomm/" + data[0].image.mobile.slice(1)}
                    />
                  </div>
                  <div className="flex flex-col px-2">
                    <div className="font-bold">{data[0].shortName}</div>
                    <div className="text-sm font-bold opacity-50">
                      {data[0].price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                      })}
                    </div>
                  </div>
                </div>

                <div className="ticker flex h-10 items-center justify-center bg-neutral-200">
                  <button className="px-2 opacity-50">-</button>
                  <div className="flex w-8 justify-center  px-1 font-bold">
                    1
                  </div>
                  <button className="px-2 opacity-50">+</button>
                </div>
              </div>

              <div className="total-price flex justify-between py-4">
                <div className="font-semibold uppercase opacity-50">Total</div>
                <div className="font-xl font-bold">$ 0</div>
              </div>

              <Link to="/checkout/" onClick={toggleMenu}>
                <button className="hover:creamy-300 w-full bg-creamy-900 p-4 text-sm font-bold uppercase text-neutral-000">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
