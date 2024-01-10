import React, { useState } from "react";
import HamburgerMenuIcon from "../assets/shared/tablet/icon-hamburger.svg";
import HomeCategory from "./HomeCategory";

function HamburgerMenu({ toggleMenu, menuIsOpen }) {
  /*
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };
  */
  document.body.style.overflow = menuIsOpen ? "auto" : "hidden";

  return (
    <>
      <button onClick={toggleMenu}>
        <img
          src={HamburgerMenuIcon}
          alt="menu-image"
          className="w-6 cursor-pointer"
        />
      </button>

      {/*Menu Items*/}
      {menuIsOpen && (
        <div className="absolute left-0 mt-8 rounded-lg bg-neutral-000">
          <div className="absolute z-20 mx-0 w-screen rounded-b-lg bg-neutral-000">
            <HomeCategory toggleMenu={toggleMenu} />
            <div
              className="absolute h-screen w-full bg-neutral-900 opacity-40 "
              onClick={toggleMenu}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
