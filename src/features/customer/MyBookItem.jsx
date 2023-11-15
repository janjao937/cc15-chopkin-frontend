import React from "react";
import { useNavigate, Link } from "react-router-dom";
import PayButton from "../../components/paymentComponents/PayButton";

export default function MyBookItem({ objBooking }) {
	console.log("obj =>", objBooking);

	const navigate = useNavigate();

	const payButtonProps = {
		bookingId: objBooking.id, 
		text: "Pay",
	  };

	return (
		<div className="flex flex-col gap-4 border rounded-xl shadow-lg p-6">
			<div className="text-red-500 font-semibold text-lg">
				Booking ID : {objBooking.id}
			</div>
			<div className="flex flex-col gap-1">
				<div className="text-md font-semibold">
					{objBooking.restaurant.restaurantName}
				</div>
				<small className="text-gray-600 ">
					{objBooking.bookingDate} at {objBooking.bookingTime} for{" "}
					{objBooking.totalCustomer + objBooking.totalKid} people
				</small>
			</div>

			<div className="flex self-start gap-3">
				<Link
					to={`/profile/${objBooking.id}/detail`}
					// onClick={() => navigate(`/profile/${objBooking.id}/detail`)}
					className="border px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-300"
				>
					Detail
				</Link>
				<Link
					to={`/profile/${objBooking.id}/edit-booking`}
					className="border px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-300"
				>
					Modify
				</Link>
				<PayButton {...payButtonProps}></PayButton>

			</div>
		</div>
	);
}
