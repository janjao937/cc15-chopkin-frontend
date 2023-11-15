import React, { useEffect } from "react";
import useRes from "../../Hooks/use-res";
import useBooking from "../../Hooks/use-booking";

export default function AdminPage() {
	const { restaurantAll, fetchAllCus, allCustomer } = useRes();
	const { getBookingAll } = useBooking();

	useEffect(() => {
		fetchAllCus();
	}, []);
	const countResAll = restaurantAll.length;
	const countCustomerAll = allCustomer.length;
	const countBookingAll = getBookingAll.length;
	return (
		<div className="flex flex-col gap-2 p-4 max-w-[1200px] mx-auto">
			<h1>DashBoard</h1>
			<small className="mb-4">Hi, Welcome back to Admin!</small>

			<div>
				<div className="text-2xl mb-4">Total New Update</div>
				<div className="flex gap-4 flex-wrap items-center justify-center">
					<div className="border bg-white shadow-lg flex flex-col items-center gap-4 p-4 w-[200px]">
						<div className="text-gray-500 font-semibold">
							ALL RESTAURANT
						</div>
						<div className="text-6xl font-semibold text-blue-800">
							{countResAll}
						</div>
						<small className="text-gray-400">
							{countResAll} orders
						</small>
					</div>
					<div className="border bg-white shadow-lg flex flex-col items-center gap-4 p-4 w-[200px]">
						<div className="text-gray-500 font-semibold">
							ALL CUSTOMER
						</div>
						<div className="text-6xl font-semibold text-blue-800">
							{countCustomerAll}
						</div>
						<small className="text-gray-400">
							{countCustomerAll} orders
						</small>
					</div>
					<div className="border bg-white shadow-lg flex flex-col items-center gap-4 p-4 w-[200px]">
						<div className="text-gray-500 font-semibold">
							ALL Booking
						</div>
						<div className="text-6xl font-semibold text-blue-800">
							{countBookingAll}
						</div>
						<small className="text-gray-400">
							{countBookingAll} orders
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}
