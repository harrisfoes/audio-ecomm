import React, { useState } from "react";
import Logo from "../components/Logo";
import HamburgerMenu from "../components/HamburgerMenu";
import Cart from "../components/Cart";
import TopNavigation from "./TopNavigation";

function Banner() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleMenuOpen = () => {
    if (cartIsOpen) {
      setCartIsOpen(false);
    } else {
      setMenuIsOpen((menuIsOpen) => !menuIsOpen);
    }
  };
  const handleCartOpen = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setCartIsOpen((menuIsOpen) => !menuIsOpen);
    }
  };

  return (
    <>
      <div className="font-white z-50 border-b border-b-neutral-000 border-opacity-30 bg-neutral-900 px-4 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1110px] items-end justify-between ">
          <div className="flex w-[70%] items-center justify-between  sm:w-[40%] md:w-[30%] lg:min-w-[75%] xl:w-[65%]">
            <div className="lg:hidden">
              <HamburgerMenu
                toggleMenu={handleMenuOpen}
                menuIsOpen={menuIsOpen}
              />
            </div>
            <Logo />
            <TopNavigation />
          </div>
          <Cart toggleMenu={handleCartOpen} cartIsOpen={cartIsOpen} />
        </div>
      </div>
    </>
  );
}

export default Banner;
