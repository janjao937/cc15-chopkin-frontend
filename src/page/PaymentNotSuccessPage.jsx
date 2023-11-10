import React from "react";
import { Link } from "react-router-dom";
import { ImNotification } from "react-icons/im";

export default function PaymentNotSuccessPage() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-4">
			<div className="text-red-700 mb-4">
				<ImNotification size={60} />
			</div>
			<div className="text-red-700 text-xl">Payment Not Completed</div>
			<div className="text-gray-500 mb-6">Your payment is Failed</div>
			<Link
				to="/"
				className="border rounded-lg px-4 py-2 bg-red-700 text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 ease-in-out"
			>
				Done
			</Link>
		</div>
	);
}
