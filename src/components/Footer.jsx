import React from "react";
import Logo from "./Logo";
import BottomNavigation from "./BottomNavigation";
import fb_ico from "../assets/shared/desktop/icon-facebook.svg";
import insta_ico from "../assets/shared/desktop/icon-instagram.svg";
import tw_ico from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <footer className="flex max-w-[5/6] flex-col items-center bg-neutral-900 px-6 pb-12 text-neutral-000 md:items-start">
      <div className="h-[4px] w-[100px] bg-creamy-900 md:mx-6"></div>
      <div className="pb-8 pt-14 md:px-6">
        <Logo />
      </div>
      <BottomNavigation />
      <p className="px-6 pt-6 text-center opacity-50 md:text-left">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex w-full flex-col items-center px-6 pb-6 md:flex-row md:items-end md:justify-between">
        <p className="pt-10 text-center font-bold opacity-50 md:text-left">
          Harris Escalante. <br /> Copyright 2023. All Rights Reserved
        </p>
        <div className="flex gap-6 pt-6">
          <img src={fb_ico} alt="facebook" />
          <img src={insta_ico} alt="instagram" />
          <img src={tw_ico} alt="twitter" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
