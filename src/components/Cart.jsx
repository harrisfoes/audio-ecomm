import React from "react";
import CartImage from "../../public/assets/shared/desktop/icon-cart.svg";

function Cart() {
  return (
    <>
      <img
        src={CartImage}
        alt="cart-image"
        className="flex-shrink-0 cursor-pointer"
      />
    </>
  );
}

export default Cart;
