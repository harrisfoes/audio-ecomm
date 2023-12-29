import React from "react";
import LogoImage from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/audio-ecomm">
        <img
          src={LogoImage}
          alt="logo image"
          className="mx-auto cursor-pointer md:mx-0 lg:mx-0"
        />
      </Link>
    </>
  );
}

export default Logo;
