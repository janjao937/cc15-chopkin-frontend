import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ to, text, active }) {
	return (
		<Link to={to}>
			<div className="py-1 ">
				<div className="flex items-center justify-center text-sm">
					<div
						className={`px-4 text-primary ${
							active
								? "text-white bg-secondary w-full text-center py-1"
								: ""
						}`}
					>
						{text}
					</div>
				</div>
			</div>
		</Link>
	);
}
