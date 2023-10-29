import React from "react";

export default function RegisterInput({
	type = "text",
	placeholder,
	value,
	onChange,
	name,
	hasError,
}) {
	return (
		<input
			className={`block w-full border rounded-sm px-3 py-1.5 text-sm
    ${hasError && "border-red-500 "}
    `}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			name={name}
		/>
	);
}
