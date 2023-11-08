import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ to, text, active }) {
	return (
		<Link to={to}>
			<div className="py-2">
				<div className="flex items-center justify-center text-sm">
					<div
						className={`${
							active
								? "text-white bg-secondary w-full text-center py-2"
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
