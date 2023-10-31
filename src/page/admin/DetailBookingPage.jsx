import React, { useState } from "react";
import blank from "../../assets/blank.png";
import { TfiBookmarkAlt } from "react-icons/tfi";
import {
	BsPersonCircle,
	BsChevronDown,
	BsTelephone,
	BsBook,
	BsPersonPlus,
} from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SlDiamond } from "react-icons/sl";
import { useParams } from "react-router-dom";

import { mockBooking } from "../../data/mock-booking";

export default function DetailBookingPage() {
	const { bookingId } = useParams();
	console.log("bookingId ==>", bookingId);

	const [newBookId] = mockBooking.filter((item) => item.id === +bookingId);
	console.log("newBookId ==>", newBookId);

	return (
		<div className="p-4 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<div className="w-[200px] h-[200px] rounded-full overflow-hidden">
					<img
						src={`${false ? "" : blank}`}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Charged Summary */}
				<div className="border rounded-md shadow-md px-8 py-4 flex flex-col gap-3 w-[340px]">
					<div className="flex items-center gap-4">
						<div>
							<TfiBookmarkAlt
								size={20}
								className="text-red-600"
							/>
						</div>
						<h1 className="font-bold text-xl">Charged Summary</h1>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<BiCalendar size={20} />
							<small>{newBookId.createdAt}</small>
						</div>
						<div className="flex items-center gap-2">
							<FaRegClock size={20} />
							<small>10:00</small>
						</div>
					</div>
					<hr className="border border-black" />
					<div className="flex items-center justify-between">
						<div className="font-semibold">
							{newBookId.package.name}
						</div>
						<div className="flex gap-1">
							<div className="text-red-600 font-semibold">
								{newBookId.package.price}
							</div>
							<span>Baht</span>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="font-semibold">
							Total pay at restaurant
						</div>
						<div className="flex gap-1">
							<div className="text-red-600 font-semibold">
								{newBookId.package.price *
									newBookId.totalCustomer}
							</div>
							<span>Baht</span>
						</div>
					</div>

					<button className="flex items-center gap-2 cursor-pointer self-start px-4 py-2 rounded-full text-red-600 border border-red-600 font-semibold">
						<BsChevronDown size={20} />
						View Menu
					</button>
				</div>
			</div>
			{/* Detail BookingId */}
			<div className="flex flex-col w-[50%] gap-2 p-4 ">
				<h1 className="text-xl mb-4 font-semibold">
					Booking ID:
					<span className="text-red-600"> {newBookId.id}</span>
				</h1>
				<div className="flex flex-col gap-4 mb-10">
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<BsPersonCircle
								size={20}
								className="text-red-600"
							/>
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Name
						</div>
						<div className="col-span-6">
							{newBookId.customer.firstName}
						</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<AiOutlineMail size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Email
						</div>
						<div className="col-span-6">
							{newBookId.customer.email}
						</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<BsTelephone size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Phone
						</div>
						<div className="col-span-6">
							{newBookId.customer.phone}
						</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<BiCalendar size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Date & Time
						</div>
						<div className="col-span-6">{newBookId.createdAt}</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<BsPersonPlus size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Number of people
						</div>
						<div className="col-span-6">
							{newBookId.totalCustomer}
						</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<FaPizzaSlice size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Restaurant
						</div>
						<div className="col-span-6">
							{newBookId.reataurant.reataurantName}
						</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<BsBook size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Package Type
						</div>
						<div className="col-span-6">
							{newBookId.package.name}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 items-cente gap-4 mb-20">
					<button
						className={`text-red-600 border border-red-600 px-4 py-1 rounded-full col-span-6 hover:bg-red-500 hover:text-white`}
					>
						MODIFY BOOKING
					</button>
					<button
						className={`text-red-600 border border-red-600 px-4 py-1 rounded-full col-span-6 hover:bg-red-500 hover:text-white`}
					>
						SHARE BOOKING
					</button>
				</div>
				<div className="flex items-center justify-center gap-4 mb-4">
					<div>
						<SlDiamond size={20} className="text-red-600" />
					</div>
					<div className="text-sm">
						You will earn xx points for this booking
					</div>
				</div>

				<div className="flex flex-col justify-center items-center text-red-600 mb-6">
					<div>If you like tax invoice for you order,</div>
					<div>
						please contack the restaurant directly with you order Id
					</div>
				</div>
			</div>
		</div>
	);
}
