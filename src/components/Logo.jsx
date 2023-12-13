import React from "react";
import LogoImage from "../assets/shared/desktop/logo.svg";

function Logo() {
  return (
    <>
      <img
        src={LogoImage}
        alt="logo image"
        className="mx-auto cursor-pointer md:mx-0 lg:mx-0"
      />
    </>
  );
}

export default Logo;
