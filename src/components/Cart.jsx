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

  const { products, updateProducts } = useContext(ProductContext);
  //console.log(data[0].image.mobile.slice(1));
  console.log(data);
  console.log(products);

  document.body.style.overflow = cartIsOpen ? "hidden" : "auto";

  const handleRemoveAll = () => {
    updateProducts([]);
  };

  const totalPrice = products.reduce((accum, items) => {
    const thisItem = data.filter((dataItem) => dataItem.id === items.id)[0]
      .price;
    return accum + items.amount * thisItem;
  }, 0);

  console.log(totalPrice);

  return (
    <>
      <div className="flex gap-1">
        <button onClick={toggleMenu} className="relative cursor-pointer">
          <img
            src={CartImage}
            alt="cart-image"
            className="flex-shrink-0 cursor-pointer"
          />
        </button>
        {products.length > 0 && (
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-creamy-900 text-[.8rem] font-bold text-neutral-000">
            {products.length}
          </div>
        )}
      </div>

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
                  Cart ({products.length})
                </h1>
                <button
                  onClick={handleRemoveAll}
                  className="underline opacity-50 hover:text-creamy-900"
                >
                  Remove all
                </button>
              </div>

              {products.length === 0 ? (
                <div className="py-8 text-center font-medium opacity-50">
                  The cart is empty
                </div>
              ) : (
                //products.map((items) => items.id + " " + items.amount)
                //<ProductInCart productData={products[0]} />
                products.map((items) => {
                  return (
                    <ProductInCart
                      key={items.id + items.amount}
                      productData={items}
                    />
                  );
                })
              )}

              <div className="total-price flex justify-between py-4">
                <div className="font-semibold uppercase opacity-50">Total</div>
                <div className="font-xl font-bold">$ {totalPrice}</div>
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
