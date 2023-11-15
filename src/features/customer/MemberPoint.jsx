import React from "react";
import Progress from "./Progress";

export default function MemberPoint({ authUser, memberPoint, myBooking }) {
	console.log("mmm=>", myBooking);
	let countMemberPoint = myBooking.length;
	console.log("first", countMemberPoint);

	return (
		<div>
			<div
				className={`flex items-center justify-between p-4 border rounded-xl ${
					countMemberPoint < 2
						? "bg-gradient-to-tl from-red-600 to-red-200"
						: "bg-gradient-to-tl from-blue-gray-500 to-blue-gray-200"
				} `}
			>
				<div className={`text-white text-xl font-semibold`}>
					{countMemberPoint < 2 ? "RED" : "SILVER"}
				</div>
				<div className={`flex flex-col items-center gap-2 text-white`}>
					<small>My Member Point</small>
					<div className="font-semibold">{countMemberPoint}</div>
				</div>
			</div>
			{/* PROGRESS */}
			<Progress
				memberPoint={memberPoint}
				countMemberPoint={countMemberPoint}
			/>
		</div>
	);
}
