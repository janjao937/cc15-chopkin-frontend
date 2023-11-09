import React from "react";

export default function MyBookItem({ obj, date }) {
	// console.log("obj =>", obj);

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
				<button className="border px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-300">
					Detail
				</button>
				<button className="border px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-300">
					Modify
				</button>
			</div>
		</div>
	);
}
