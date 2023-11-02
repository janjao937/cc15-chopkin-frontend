import React from "react";
import MyButton from "./MyButton";
import { GrSearch } from "react-icons/gr";

export default function SearchInput() {
	return (
		<div className="flex items-center justify-center gap-4 border bg-white px-4 py-1 w-[500px] rounded-full outline-none">
			<GrSearch size={20} className="text-gray-600" />
			<input
				type="text"
				className="bg-transparen w-full rounded-md border-white  "
			/>
			<MyButton>Search</MyButton>
		</div>
	);
}
