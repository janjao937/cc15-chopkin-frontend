import React from "react";

export default function Progress({ memberPoint }) {
	console.log("mem =>", memberPoint);

	return (
		<div>
			<small className="font-semibold">Your Progress</small>
			<div className="relative">
				<div className="absolute w-full top-0 border border-red-200 py-2 rounded-full"></div>
				<div
					className={`${
						memberPoint <= 0 ? "hidden" : "w-[10%]"
					} absolute top-0 z-99 border bg-red-500 rounded-full py-2`}
				></div>
			</div>
		</div>
	);
}
