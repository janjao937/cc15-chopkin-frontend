import React from "react";
import { Input } from "@material-tailwind/react";

export default function RegisterInput({
	type = "text",
	label,
	value,
	onChange,
	name,
	hasError,
	icon,
}) {
	return (
		<Input
			size="lg"
			className={`block w-full border px-3 py-1.5 text-sm
      ${hasError ? "border-2 border-red-500" : "border-blue-gray-200"}
      `}
			type={type}
			label={label}
			value={value}
			onChange={onChange}
			name={name}
			icon={icon}
		/>
	);
}
