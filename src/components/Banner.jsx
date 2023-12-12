import React from "react";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HamburgerMenu";
import Cart from "../components/Cart";
import TopNavigation from "./TopNavigation";

function Banner() {
  return (
    <>
      <div className="font-white  border-b border-b-neutral-000 border-opacity-30 bg-neutral-900 px-4 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1110px] items-end justify-between">
          <div className="flex w-[70%] justify-between md:w-[30%] lg:w-[75%] xl:w-[65%]">
            <div className="lg:hidden">
              <HamburgerMenu />
            </div>
            <Logo />
            <TopNavigation />
          </div>
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Banner;
