import React from "react";
import MyButton from "./MyButton";
import { GrSearch } from "react-icons/gr";

export default function SearchInput({
	placeholder,
	type = "text",
	style,
	onChange,
}) {
	return (
		<div className="flex items-center justify-center gap-4 border bg-white px-4 py-1 w-[500px] rounded-full outline-none">
			<GrSearch size={20} className="text-gray-600" />
			<input
				type={type}
				className={`bg-transparen w-full rounded-md border-white px-2 ${style}`}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<MyButton style={`bg-primary rounded-md`}>Search</MyButton>
		</div>
	);
}
