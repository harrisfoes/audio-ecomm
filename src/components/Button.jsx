import React from "react";

function Button({ text, color }) {
  return (
    <button
      className={`bg-${color} w-[160px] h-[48px] mx-auto uppercase font-bold text-[13px] tracking-wider`}
    >
      {text}
    </button>
  );
}

export default Button;
