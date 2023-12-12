import React from "react";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HamburgerMenu";
import Cart from "../components/Cart";

function Banner() {
  return (
    <>
      <div className="font-white flex justify-between border-b border-b-neutral-000 border-opacity-30 bg-neutral-900 px-4 py-8 md:px-10">
        <div className="flex w-[70%] justify-between md:w-[30%]">
          <HamburgerMenu />

          <Logo />
        </div>
        <Cart />
      </div>
    </>
  );
}

export default Banner;
