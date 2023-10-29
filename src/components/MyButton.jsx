import React from "react";

export default function MyButton({ children, onClick, style, disabled, type }) {
	return (
		<button
			className={`cursor-pointer px-4 py-2 bg-orange-400 rounded-lg text-white  shadow-sm hover:bg-orange-300
            ${style} `}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	);
}
