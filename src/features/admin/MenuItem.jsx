import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ to, text, icon, active }) {
	return (
		<Link to={to}>
			<div>
				<div className="flex items-center gap-2">
					<div
						className={`w-[8px] h-[20px] border rounded-md ${
							active ? "bg-green-500" : ""
						}`}
					></div>
					<div className={`${active ? "text-green-500" : ""}`}>
						{icon}
					</div>
					<div className={`${active ? "text-green-500" : ""}`}>
						{text}
					</div>
				</div>
			</div>
		</Link>
	);
}
