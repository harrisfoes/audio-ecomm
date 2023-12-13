import React from "react";
import Logo from "./Logo";
import BottomNavigation from "./BottomNavigation";
import fb_ico from "../assets/shared/desktop/icon-facebook.svg";
import insta_ico from "../assets/shared/desktop/icon-instagram.svg";
import tw_ico from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <footer className="bg-neutral-900 pb-12 text-neutral-000 md:items-start">
      <div className="mx-auto flex max-w-[1110px] flex-col items-center  md:items-start">
        <div className="  lg:flex lg:w-full lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mx-auto h-[4px] w-[100px] bg-creamy-900  md:mx-6 lg:mx-0"></div>
            <div className="mx-auto pt-14 md:mx-0 md:px-6 lg:px-0">
              <Logo />
            </div>
          </div>
          <div className="my-6 md:m-4 lg:m-0">
            <BottomNavigation />
          </div>
        </div>
        <p className=" px-6 pt-6 text-center opacity-50 md:text-left lg:w-1/2 lg:px-0 lg:pt-16">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex w-full flex-col items-center px-6 pb-6 md:flex-row md:items-end md:justify-between lg:mt-16 lg:px-0">
          <p className="pt-10 text-center font-bold opacity-50 md:text-left">
            Harris Escalante. <br /> Copyright 2023. All Rights Reserved
          </p>
          <div className="flex gap-6 pt-6">
            <img
              src={fb_ico}
              alt="facebook"
              className="cursor-pointer hover:fill-creamy-900"
            />
            <img
              src={insta_ico}
              alt="instagram"
              className="cursor-pointer hover:fill-creamy-900"
            />
            <img
              src={tw_ico}
              alt="twitter"
              className="cursor-pointer hover:fill-creamy-900"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
