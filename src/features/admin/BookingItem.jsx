import React from "react";
import MyButton from "../../components/MyButton";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { useState } from "react";
import blank from "../../assets/blank.png";

export default function BookingItem({
	obj,
	id,
	firstName,
	email,
	phone,
	date,
	totalCustomer,
	reataurantName,
	packageName,
	packPrice,
}) {
	// console.log("id==>", id);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="grid grid-cols-12  ">
				<div className="col-span-5 px-4 py-2 text-center border border-gray-400  ">
					{id}
				</div>
				<div className="col-span-3 px-4 py-2 text-center border border-gray-400 ">
					{firstName}
				</div>
				<Link
					to={`/admin/booking/${id}`}
					className="rounded-full col-span-2 text-center justify-items-center py-1  bg-secondary mx-4 my-2 text-white"
				>
					Detail
				</Link>
				<MyButton
					onClick={() => setIsOpen(!isOpen)}
					style={`rounded-full col-span-2 bg-secondary mx-4 my-2`}
				>
					Modify
				</MyButton>

				{/* Modify */}
				<Modal
					title={`BOOKING MODIFY`}
					titleStyle={`bg-red-600 text-white`}
					open={isOpen}
					maxWidth={50}
					onClose={() => setIsOpen(false)}
				>
					<div className="grid grid-cols-12 mb-6">
						<div className="col-span-8">
							<div className="flex gap-2">
								<div>Booking ID :</div>
								<div>xxxxxx</div>
							</div>
							<div className="flex gap-2">
								<div>Restaurant Name :</div>
								<div>Res_name</div>
							</div>
						</div>
						<div className="col-span-4 w-[100px] h-[100px] rounded-full overflow-hidden bg-red-400 flex items-center justify-center mx-auto">
							<img
								src={false ? "" : blank}
								alt="logo"
								className="w-full h-full"
							/>
						</div>
					</div>

					<div className="grid grid-cols-12">
						<div className="col-span-3">
							<div className="flex flex-col gap-2 mb-4">
								<div>Date</div>
								<select name="" id="">
									<option value="">10 jun 23</option>
								</select>
							</div>
							<div className="flex flex-col gap-2 mb-4">
								<div>Adult(s)</div>
								<select name="" id="">
									<option value="">3</option>
								</select>
							</div>
						</div>

						<div className="col-span-3">
							<div className="flex flex-col gap-2 mb-4">
								<div>Time</div>
								<select name="" id="">
									<option value="">11:00</option>
								</select>
							</div>
							<div className="flex flex-col gap-2 mb-4">
								<div>Kid(s)</div>
								<select name="" id="">
									<option value="">0</option>
								</select>
							</div>
						</div>

						<div className="col-span-6">
							<div className="flex flex-col gap-2 mb-4">
								<div>Package</div>
								<select name="" id="">
									<option value="">All You Can Eat</option>
								</select>
							</div>
							<div className="flex flex-col gap-2 mb-4">
								<div>Package Name</div>
								<select name="" id="">
									<option value="">All You Can Eat</option>
								</select>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-12 items-center gap-4 mb-4">
						<div className="col-span-6 flex flex-col gap-2">
							<div>Special request</div>
							<textarea
								name=""
								id=""
								cols="20"
								// rows="5"
								className="border w-full"
							></textarea>
						</div>
						<h1 className="col-span-6 text-red-600 text-2xl font-semibold">
							฿599
						</h1>
					</div>

					<div className="flex items-center justify-between">
						<button className="border px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-400 hover:text-black">
							Update and Modify
						</button>
						<button className="border px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-400 hover:text-black">
							Cancel this booking
						</button>
						<button
							className="border px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-400 hover:text-black"
							onClick={() => setIsOpen(false)}
						>
							Close this windew
						</button>
					</div>
				</Modal>
			</div>
		</>
	);
}
