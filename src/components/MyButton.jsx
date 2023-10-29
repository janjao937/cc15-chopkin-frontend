import React from "react";

export default function MyButton({ children, onClick, style }) {
	return (
		<button
			className={`px-4 py-2 bg-orange-400 rounded-lg text-white cursor-pointer shadow-sm hover:bg-orange-300
            ${style} `}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
