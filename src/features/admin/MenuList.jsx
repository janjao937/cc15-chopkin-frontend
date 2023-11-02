import React from "react";
import MenuItem from "../admin/MenuItem";
import { useLocation } from "react-router-dom";

export default function MenuList({ data }) {
	const { pathname } = useLocation();
	return (
		<div className="">
			<MenuItem
				to={data.to}
				text={data.text}
				icon={data.icon}
				active={pathname === data.to}
			/>
		</div>
	);
}
