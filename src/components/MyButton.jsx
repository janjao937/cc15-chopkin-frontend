import React from "react";

export default function MyButton({ children, onClick, style, disabled, type }) {
  return (
    <button
      className={`cursor-pointer px-4 py-1 bg-[#FFC24B] text-white shadow-sm hover:bg-yellow-300
            ${style} `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
