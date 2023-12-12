import React from "react";
import CartImage from "../assets/shared/desktop/icon-cart.svg";

function Cart() {
  return (
    <>
      <img src={CartImage} alt="cart-image" className="flex-shrink-0" />
    </>
  );
}

export default Cart;
