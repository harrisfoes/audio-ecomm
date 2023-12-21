import React from "react";
import NavLinks from "./NavLinks";

function BottomNavigation() {
  const links = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <nav className="text-center text-sm font-bold uppercase tracking-widest text-neutral-000">
      <NavLinks />
    </nav>
  );
}

export default BottomNavigation;
