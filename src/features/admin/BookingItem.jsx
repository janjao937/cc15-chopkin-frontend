import React from "react";
import dayjs from "dayjs";
import MyButton from "../../components/MyButton";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { useState } from "react";
import blank from "../../assets/blank.png";
import CalenderDate from "../../components/CalenderDate";
import Time from "../../components/Time";

const mockPackageId = [
	{
		name: "Premium Buffet Unlimited1",
		price: 500,
	},
	{
		name: "Premium Buffet Unlimited2",
		price: 1000,
	},
	{
		name: "Premium Buffet Unlimited3",
		price: 1500,
	},
];

export default function BookingItem({
	obj,
	id,
	firstName,
	email,
	phone,
	date,
	totalCustomer,
	totalKid,
	reataurantName,
	packageName,
	packPrice,
}) {
	// console.log("id==>", id);

	const [isOpen, setIsOpen] = useState(false);
	// const [bookingDate, setBookingDate] = useState(null);
	// const [bookingTime, setBookingTime] = useState(dayjs());

	const [totalPrice, setTotalPrice] = useState(
		(totalCustomer + totalKid / 2) * packPrice
	);

	const [inputModify, setInputModify] = useState({
		bookingData: "",
		bookingTime: "",
		totalCustomer: 1,
		totalKid: 0,
		specialRequest: "",
		packageName: "",
	});

	// console.log(bookingDate.format("DD/MM/YYYY"));
	// console.log(bookingTime.format("HH:mm"));

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
					maxWidth={60}
					onClose={() => setIsOpen(false)}
				>
					<div className="grid grid-cols-12 mb-6">
						<div className="col-span-8">
							<div className="flex gap-2">
								<div>Booking ID :</div>
								<div>{id}</div>
							</div>
							<div className="flex gap-2">
								<div>Restaurant Name :</div>
								<div>{reataurantName}</div>
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
								{/* Calender Date */}
								{/* <select name="" id="">
									<option value="">10 jun 23</option>
								</select> */}
								<CalenderDate
									inputModify={inputModify}
									setInputModify={setInputModify}
								/>
							</div>
							<div className="flex flex-col gap-2 mb-4">
								<div>Adult(s)</div>
								<input
									type="number"
									name="totalCustomer"
									value={inputModify.totalCustomer}
									onChange={(e) =>
										setInputModify({
											...inputModify,
											[e.target.name]: +e.target.value,
										})
									}
									className="px-4 py-2 w-[180px] border rounded-md outline-none"
								/>
							</div>
						</div>

						<div className="col-span-3">
							<div className="flex flex-col gap-2 mb-4">
								<div>Time</div>
								{/* Time */}
								{/* <select name="" id="">
									<option value="">11:00</option>
								</select> */}

								<Time
									inputModify={inputModify}
									setInputModify={setInputModify}
									inputKey={`bookingTime`}
								/>
							</div>
							<div className="flex flex-col gap-2 mb-4">
								<div>Kid(s)</div>
								<input
									type="number"
									name="totalKid"
									value={inputModify.totalKid}
									onChange={(e) =>
										setInputModify({
											...inputModify,
											[e.target.name]: +e.target.value,
										})
									}
									className="px-4 py-2 w-[180px] border rounded-md outline-none"
								/>
							</div>
						</div>

						<div className="col-span-6">
							{/* <div className="flex flex-col gap-2 mb-4">
								<div>Package</div>
								<select name="" id="">
									<option value="">All You Can Eat</option>
								</select>
							</div> */}
							<div className="flex flex-col gap-2 mb-4">
								<div>Package Name</div>
								<select
									name="packageName"
									className="border rounded-md px-4 py-2 outline-none "
									onChange={(e) =>
										setInputModify({
											...inputModify,
											[e.target.name]: e.target.value,
										})
									}
								>
									<option value="select">
										{packageName}
									</option>
									{mockPackageId.map((item, index) => (
										<option key={index} value={item.name}>
											{item.name}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-12 items-center gap-4 mb-4">
						<div className="col-span-6 flex flex-col gap-2">
							<div>Special request</div>
							<textarea
								name="specialRequest"
								value={inputModify.name}
								id=""
								cols="20"
								// rows="5"
								onChange={(e) =>
									setInputModify({
										...inputModify,
										specialRequest: e.target.value,
									})
								}
								className="border w-full px-4 py-2 outline-none"
							></textarea>
						</div>
						<h1 className="col-span-6 text-red-600 text-2xl font-semibold text-center">
							฿{totalPrice}
						</h1>
					</div>

					<div className="flex items-center justify-start gap-4">
						<button className="border px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-400 hover:text-black">
							Update and Modify
						</button>
						<button className="border px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-400 hover:text-black">
							Cancel this booking
						</button>
						<div className="">
							<button
								className="border px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-400 hover:text-black"
								onClick={() => setIsOpen(false)}
							>
								Close this windew
							</button>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}
