import React from "react";

function Button({ text, color }) {
  const colorVariants = {
    "creamy-900": "bg-creamy-900 hover:bg-creamy-300",
    black: "bg-neutral-900 hover:bg-[#4C4C4C]",
    transparent: "border border-1 hover:bg-neutral-900 hover:text-neutral-000",
  };

  return (
    <button
      className={`${colorVariants[color]} mx-auto h-[48px] w-[160px] text-[13px] font-bold uppercase tracking-wider`}
    >
      {text}
    </button>
  );
}

export default Button;
