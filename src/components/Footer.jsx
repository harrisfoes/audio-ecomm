import React from "react";
import Logo from "./Logo";
import BottomNavigation from "./BottomNavigation";
import fb_ico from "../assets/shared/desktop/icon-facebook.svg";
import insta_ico from "../assets/shared/desktop/icon-instagram.svg";
import tw_ico from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-neutral-900 pb-12 text-neutral-000">
      <div className="h-[4px] w-[100px] bg-creamy-900"></div>
      <div className="pb-8 pt-14">
        <Logo />
      </div>
      <BottomNavigation />
      <p className="px-8 pt-6 text-center opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className=" p-10 text-center font-bold opacity-50">
        Harris Escalante. <br /> Copyright 2023. All Rights Reserved
      </p>
      <div className="flex gap-4 pb-6 pt-2">
        <img src={fb_ico} alt="facebook" />
        <img src={insta_ico} alt="instagram" />
        <img src={tw_ico} alt="twitter" />
      </div>
    </footer>
  );
}

export default Footer;
