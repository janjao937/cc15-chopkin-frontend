import React from "react";
import Progress from "./Progress";

export default function MemberPoint({ authUser, memberPoint }) {
	return (
		<div>
			<div
				className={`flex items-center justify-between p-4 border rounded-xl ${
					memberPoint <= 0
						? "bg-gradient-to-tl from-red-600 to-red-200"
						: "bg-gradient-to-tl from-blue-gray-500 to-blue-gray-200"
				} `}
			>
				<div className={`text-white text-xl font-semibold`}>
					{memberPoint === 0
						? "RED"
						: memberPoint > 2
						? "SILVER"
						: ""}
				</div>
				<div className={`flex flex-col items-center gap-2 text-white`}>
					<small>My Member Point</small>
					<div className="font-semibold">{memberPoint}</div>
				</div>
			</div>
			{/* PROGRESS */}
			<Progress memberPoint={memberPoint} />
		</div>
	);
}
