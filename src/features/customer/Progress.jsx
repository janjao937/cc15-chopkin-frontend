import React from "react";

export default function Progress({ memberPoint, countMemberPoint }) {
	// console.log("mem =>", memberPoint);

	return (
		<div className="flex flex-col gap-1">
			<small className="font-semibold">Your Progress</small>
			{/* progress */}
			<div className="mb-4">
				<div className="relative">
					<div className="absolute w-full top-0 border border-red-200 py-2 rounded-full"></div>
					<div
						className={`${
							countMemberPoint < 2
								? "hidden"
								: countMemberPoint < 10
								? "w-[10%]"
								: countMemberPoint < 20
								? "w-[20%]"
								: countMemberPoint < 30
								? "w-[30%]"
								: countMemberPoint < 40
								? "w-[40%]"
								: countMemberPoint < 40
								? "w-[50%]"
								: countMemberPoint < 50
								? "w-[60%]"
								: countMemberPoint < 60
								? "w-[70%]"
								: countMemberPoint < 70
								? "w-[80%]"
								: countMemberPoint < 80
								? "w-[90%]"
								: countMemberPoint < 90
								? "w-[100%]"
								: ""
						} absolute top-0 z-99 border bg-red-500 rounded-full py-2`}
					></div>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex flex-col text-sm">
					<div>Total</div>
					<div>{countMemberPoint} Reservations</div>
				</div>
				<div className="text-gray-400 font-semibold">OR</div>
				<div className="flex flex-col text-sm">
					<div>Unlock SILVER</div>
					<div>2 Reservations</div>
				</div>
			</div>
		</div>
	);
}
