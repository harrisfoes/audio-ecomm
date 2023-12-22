import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./component-pages/Homepage";

function NavLinks() {
  const links = [
    { name: "Home", to: "/audio-ecomm" },
    { name: "Headphones", to: "/category/headphones" },
    { name: "Speakers", to: "/category/speakers" },
    { name: "Earphones", to: "/category/earphones" },
  ];
  return (
    <>
      <ul className="md:flex md:gap-6">
        {links.map((items) => {
          return (
            <li
              key={items}
              className="cursor-pointer p-2 hover:text-creamy-900"
            >
              <Link to={items.to}>{items.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NavLinks;
