import React from "react";

function BottomNavigation() {
  return (
    <nav className="m-6 text-center text-sm font-bold uppercase tracking-widest text-neutral-000 md:m-4">
      <ul className="md:flex md:gap-6">
        <li className="p-2">Home</li>
        <li className="p-2">Headphones</li>
        <li className="p-2">Speakers</li>
        <li className="p-2">Earphones</li>
      </ul>
    </nav>
  );
}

export default BottomNavigation;
