import React from "react";
import NavLinks from "./NavLinks";

function TopNavigation() {
  const links = ["Home", "Headphones", "Speakers", "Earphones"];

  return (
    <nav className="hidden text-sm font-bold uppercase tracking-widest text-neutral-000 lg:block">
      <NavLinks />
    </nav>
  );
}

export default TopNavigation;
