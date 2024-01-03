import React, { useState } from "react";
import CartImage from "../assets/shared/desktop/icon-cart.svg";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    //document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <div onClick={toggleMenu} className="relative">
        <img
          src={CartImage}
          alt="cart-image"
          className="flex-shrink-0 cursor-pointer"
        />
      </div>

      {isOpen && (
        <>
          <div className="absolute left-0 top-20 h-full w-screen bg-neutral-900 opacity-50"></div>
          <div className="absolute left-0 top-28 z-50 mx-6 w-[85%] rounded-lg bg-neutral-000 p-4">
            <div className="topLine flex items-end justify-between">
              <h1 className="text-2xl font-bold uppercase">Cart (3)</h1>
              <div className="opacity-50">Remove all</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
