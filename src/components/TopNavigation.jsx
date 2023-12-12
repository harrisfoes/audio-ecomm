import React from "react";

function TopNavigation() {
  return (
    <nav className="hidden text-sm font-bold uppercase tracking-widest text-neutral-000 lg:block">
      <ul className="md:flex md:gap-6">
        <li className="p-2">Home</li>
        <li className="p-2">Headphones</li>
        <li className="p-2">Speakers</li>
        <li className="p-2">Earphones</li>
      </ul>
    </nav>
  );
}

export default TopNavigation;
