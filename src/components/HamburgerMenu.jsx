import React, { useState } from "react";
import HamburgerMenuIcon from "../assets/shared/tablet/icon-hamburger.svg";
import CategorySection from "./CategorySection";
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    //50/50
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <div onClick={toggleMenu}>
        <img
          src={HamburgerMenuIcon}
          alt="menu-image"
          className="w-6 cursor-pointer"
        />
      </div>

      {/*Menu Items*/}
      {isOpen && (
        <div className="absolute left-0 mt-8 rounded-lg bg-neutral-000">
          <div className="absolute z-20 mx-0 w-screen rounded-b-lg bg-neutral-000">
            <CategorySection />
            <div
              className="absolute h-[2000px] w-full bg-neutral-900 opacity-40 "
              onClick={toggleMenu}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
