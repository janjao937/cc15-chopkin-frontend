import React from "react";

export default function BookHistoryItem({ obj }) {
	return (
		<div className="flex flex-col gap-4 border rounded-xl shadow-lg p-6">
			<div className="text-red-500 font-semibold text-lg">
				Booking ID : {obj.id}
			</div>
			<div className="flex flex-col gap-1">
				<div className="text-md font-semibold">
					{obj.restaurant.restaurantName}
				</div>
				<small className="text-gray-600 ">
					{obj.bookingDate} at {obj.bookingTime} for{" "}
					{obj.totalCustomer + obj.totalKid} people
				</small>
			</div>

			<div className="flex self-start gap-3">
				<button className="px-4 py-2 bg-red-700 text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-md">
					Detail
				</button>
				<button className="px-4 py-2 bg-red-700 text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-md">
					Book Again
				</button>
			</div>
		</div>
	);
}
