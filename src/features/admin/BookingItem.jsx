import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import MyButton from "../../components/MyButton";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import blank from "../../assets/blank.png";
import CalenderDate from "../../components/CalenderDate";
import Time from "../../components/Time";
import useBooking from "../../Hooks/use-booking";
import axios from "../../config/axios";
import { toast } from "react-toastify";

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
	console.log("obj==>", obj);

	const navigate = useNavigate();
	const { editBooking, deleteBooking } = useBooking();

	const [getPackageByRes, setGetPackageByRes] = useState([]);

	useEffect(() => {
		const fetchPackageByRes = async () => {
			try {
				const res = await axios.get(
					`package/getAll/${obj.restaurantId}`
				);
				console.log("fetchPackageByRes =>", res.data);
				setGetPackageByRes(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchPackageByRes();
	}, []);

	const [isOpen, setIsOpen] = useState(false);
	// const [bookingDate, setBookingDate] = useState(null);
	// const [bookingTime, setBookingTime] = useState(dayjs());

	// const [totalPrice, setTotalPrice] = useState(
	// 	(totalCustomer + totalKid / 2) * packPrice
	// );

	// const [inputModify, setInputModify] = useState({
	// 	bookingDate: "",
	// 	bookingTime: "",
	// 	totalCustomer: 1,
	// 	totalKid: 0,
	// specialRequest: "",
	// 	packageName: "",
	// });

	// console.log(bookingDate.format("DD/MM/YYYY"));
	// console.log(bookingTime.format("HH:mm"));

	const [input, setInput] = useState({
		packageId: "",
		totalCustomer: "",
		totalKid: "",
		bookingDate: "",
		bookingTime: "",
	});

	const handleClickEditBooking = () => {
		if (input.bookingDate === "") {
			input.bookingDate = date;
		}
		if (input.bookingTime === "") {
			input.bookingTime = obj.bookingTime;
		}
		if (input.packageId === "") {
			input.packageId = obj.package.id;
		}
		if (input.totalCustomer === "") {
			input.totalCustomer = totalCustomer;
		}
		if (input.totalKid === "") {
			input.totalKid = totalKid;
		}
		editBooking(obj.id, input);
		// alert("UP TO DATE BOOKING");
		toast.success(`UPDATE BOOKING`);
		// window.location.reload();
	};

	const handleClickDeleteBooking = () => {
		deleteBooking(obj.id);
		// alert("Delete Booking");
		toast.warning(`DELETE BOOKING`);
		navigate(`/admin/booking`);
	};

	const handleClickCloseBooking = () => {
		setIsOpen(false);
		window.location.reload();
	};

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
								<div>BOOKING-DATE :</div>
								{/* Calender Date */}
								{/* <select name="" id="">
									<option value="">10 jun 23</option>
								</select> */}
								<CalenderDate
									inputModify={input}
									setInputModify={setInput}
									// defaultValue={getBookingById.bookingDate}
								/>
							</div>
							<div className="flex flex-col gap-2 mb-4">
								<div>Adult(s)</div>
								<input
									type="number"
									name="totalCustomer"
									placeholder={totalCustomer}
									// value={inputModify.totalCustomer}
									onChange={(e) =>
										setInput({
											...input,
											totalCustomer: +e.target.value,
										})
									}
									className="px-4 py-2 w-[180px] border rounded-md outline-none"
								/>
							</div>
						</div>

						<div className="col-span-3">
							<div className="flex flex-col gap-2 mb-4">
								<div>BOOKING-TIME</div>
								{/* Time */}
								{/* <select name="" id="">
									<option value="">11:00</option>
								</select> */}

								<Time
									inputModify={input}
									setInputModify={setInput}
									inputKey={`bookingTime`}
									// defaultValue={`2022-04-17T${getBookingById.bookingTime}`}
									// defaultValue={`2022-04-17T15:30`}
								/>
							</div>
							<div className="flex flex-col gap-2 mb-4">
								<div>Kid(s)</div>
								<input
									type="number"
									name="totalKid"
									placeholder={totalKid}
									// value={inputModify.totalKid}
									onChange={(e) =>
										setInput({
											...input,
											totalKid: +e.target.value,
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
								<div>PACKAGE-NAME</div>
								<select
									name={input.packageId}
									className="border rounded-md px-4 py-2 outline-none "
									onChange={(e) =>
										setInput({
											...input,
											packageId: +e.target.value,
										})
									}
								>
									<option
										// value={getBookingById.packageId}
										disabled="disabled"
										// hidden
									></option>
									{getPackageByRes.map((item, index) => (
										<option key={index} value={item.id}>
											{item.name} {` `} {item.price}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					{/* <div className="grid grid-cols-12 items-center gap-4 mb-4">
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
					</div> */}

					<div className="flex items-center justify-start gap-4">
						<button
							onClick={handleClickEditBooking}
							className="border px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-400 hover:text-black"
						>
							Update and Modify
						</button>
						<button
							onClick={handleClickDeleteBooking}
							className="border px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-400 hover:text-black"
						>
							Cancel this booking
						</button>
						<div className="">
							<button
								className="border px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-400 hover:text-black"
								onClick={handleClickCloseBooking}
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
