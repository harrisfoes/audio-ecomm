import React from "react";

function BottomNavigation() {
  const links = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <nav className="text-center text-sm font-bold uppercase tracking-widest text-neutral-000">
      <ul className="md:flex md:gap-6">
        {links.map((items) => {
          return (
            <li
              key={items}
              className="cursor-pointer p-2 hover:text-creamy-900"
            >
              {items}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default BottomNavigation;
