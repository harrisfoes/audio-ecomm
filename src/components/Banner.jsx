import React from "react";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HamburgerMenu";
import Cart from "../components/Cart";

function Banner() {
  return (
    <>
      <div className="bg-neutral-900 font-white py-8 px-4 border-b border-opacity-30 border-b-neutral-000 flex justify-between">
        <HamburgerMenu />

        <Logo />
        <Cart />
      </div>
    </>
  );
}

export default Banner;
