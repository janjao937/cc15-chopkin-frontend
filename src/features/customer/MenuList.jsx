import React from "react";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

export default function MenuList({ data }) {
	const { pathname } = useLocation();
	return (
		<div className="">
			<MenuItem
				to={data.to}
				text={data.text}
				active={pathname === data.to}
			/>
		</div>
	);
}
