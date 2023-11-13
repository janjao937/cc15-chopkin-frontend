import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch,useSelector } from "react-redux";
import { paymentSuccess } from "../app/slice/paymentSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function PaymentSuccessPage() {
	const {loading,error} = useSelector((state)=>state.payment);
	const paymentId = useParams().paymentId;//get paymentId from params
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(paymentSuccess({paymentId:paymentId,paymentStatus:1}))
	})

	return (loading&&
		<div className="h-screen flex flex-col justify-center items-center gap-4">
			<div className="text-green-700 mb-4">
				<BsFillCheckCircleFill size={60} />
			</div>
			<div className="text-green-700 text-xl">Payment Successful</div>
			<div className="text-gray-500 mb-6">
				Thank you! Your payment id:{paymentId} is complete
			</div>
			<Link
				to="/"
				className="border rounded-lg px-4 py-2 bg-green-700 text-white cursor-pointer hover:bg-green-300 hover:text-black hover:scale-125 duration-300 ease-in-out"
			>
				Done
			</Link>
		</div>
	);
}
