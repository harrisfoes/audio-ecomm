import React from "react";

function Button({ text, color }) {
  const colorVariants = {
    "creamy-900": "bg-creamy-900",
    black: "bg-neutral-900",
    transparent: "border border-1",
  };

  return (
    <button
      className={`${colorVariants[color]} w-[160px] h-[48px] mx-auto uppercase font-bold text-[13px] tracking-wider`}
    >
      {text}
    </button>
  );
}

export default Button;
