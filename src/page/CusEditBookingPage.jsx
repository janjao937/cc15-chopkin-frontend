import React, { useEffect, useState } from "react";
import useBooking from "../Hooks/use-booking";
import { useParams } from "react-router-dom";
import Time from "../components/Time";
import CalenderDate from "../components/CalenderDate";
import useRes from "../Hooks/use-res";
import axios from "../config/axios";
import { useNavigate, Link } from "react-router-dom";

export default function CusEditBookingPage() {
	const { getBookingAll, editBooking, deleteBooking } = useBooking();

	const navigate = useNavigate();
	// console.log("getBookingAll =>", getBookingAll);

	const [getPackageByRes, setGetPackageByRes] = useState([]);

	const [varidate, setVaridate] = useState(true);
	const [input, setInput] = useState({
		packageId: "",
		totalCustomer: "",
		totalKid: "",
		bookingDate: "",
		bookingTime: "",
	});

	// const { restaurantAll } = useRes();
	// console.log("resAll =>", restaurantAll);

	const { bookingId } = useParams();
	// console.log("bookingId =>", bookingId);

	const getBookingById = getBookingAll.find((item) => item.id === bookingId);
	console.log("getBookingById =>", getBookingById);

	useEffect(() => {
		const fetchPackageByRes = async () => {
			try {
				// console.log("restaurantId =>", getBookingById.restaurantId);
				const res = await axios.get(
					`package/getAll/${getBookingById.restaurantId}`
				);
				console.log("fetchPackageByRes =>", res.data);
				setGetPackageByRes(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchPackageByRes();
	}, []);

	const handleClickEditBooking = () => {
		if (input.bookingDate === "") {
			input.bookingDate = getBookingById.bookingDate;
		}
		if (input.bookingTime === "") {
			input.bookingTime = getBookingById.bookingTime;
		}
		if (input.packageId === "") {
			input.packageId = getBookingById.package.id;
		}
		if (input.totalCustomer === "") {
			input.totalCustomer = getBookingById.totalCustomer;
		}
		if (input.totalKid === "") {
			input.totalKid = getBookingById.totalKid;
		}
		editBooking(bookingId, input);
		alert("UP TO DATE BOOKING");
		window.location.reload();
	};

	const handleClickDeleteBooking = () => {
		deleteBooking(bookingId);
		alert("Delete Booking");
		navigate(`/profile/${getBookingById.customerId}`);
		window.location.reload();
	};

	return (
		<div className="flex flex-col gap-4 max-w-5xl p-4 mx-auto">
			<div className="text-center text-2xl font-semibold text-primary">
				{getBookingById.restaurant?.restaurantName}
			</div>
			<div className="flex flex-col items-center justify-center gap-6">
				<div className="flex flex-col gap-4">
					<div className="flex justify-center text-xl font-semibold text-secondary">
						BOOKING-CURRENT
					</div>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-6">BOOKING-TIME :</div>
						<div className="col-span-6">
							{getBookingById.bookingTime}
						</div>
					</div>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-6">BOOKING-DATE :</div>
						<div className="col-span-6">
							{getBookingById.bookingDate}
						</div>
					</div>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-6">NUMBER OF PEOPLE :</div>
						<div className="col-span-6">
							{getBookingById.totalCustomer +
								getBookingById.totalKid}
						</div>
					</div>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-6">PACKAGE-NAME :</div>
						<div className="col-span-6">
							{getBookingById.package.name}
						</div>
					</div>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-6">PRICE :</div>
						<div className="col-span-6">
							{getBookingById.package.price *
								(getBookingById.totalCustomer +
									getBookingById.totalKid / 2)}
						</div>
					</div>
				</div>

				{/* ############# UP TO DATE ############## */}
				<div className="flex flex-col gap-4">
					<div className="flex justify-center text-xl font-semibold text-secondary">
						UPDATE-BOOKING
					</div>
					<div className="grid grid-cols-12 items-center gap-4">
						<div className="col-span-6">BOOKING-TIME :</div>
						<div className="col-span-6">
							{/* {getBookingById.bookingTime} */}
							<Time
								inputModify={input}
								setInputModify={setInput}
								inputKey={`bookingTime`}
								// defaultValue={`2022-04-17T${getBookingById.bookingTime}`}
								// defaultValue={`2022-04-17T15:30`}
							/>
						</div>
					</div>
					<div className="grid grid-cols-12 items-center gap-4">
						<div className="col-span-6">BOOKING-DATE :</div>
						<div className="col-span-6">
							{/* {getBookingById.bookingDate} */}
							<CalenderDate
								inputModify={input}
								setInputModify={setInput}
								// defaultValue={getBookingById.bookingDate}
							/>
						</div>
					</div>
					<div className="grid grid-cols-12 items-center gap-4">
						<div className="col-span-6">TOTAL CUSTOMERS :</div>
						<input
							onChange={(e) =>
								setInput({
									...input,
									totalCustomer: +e.target.value,
								})
							}
							type="number"
							className="col-span-6 border rounded-lg outline-none px-4 py-2"
						/>
					</div>
					<div className="grid grid-cols-12 items-center gap-4">
						<div className="col-span-6">TOTAL KIDS :</div>
						<input
							onChange={(e) =>
								setInput({
									...input,
									totalKid: +e.target.value,
								})
							}
							type="number"
							className="col-span-6 border rounded-lg outline-none px-4 py-2"
						/>
					</div>
					<div className="grid grid-cols-12 items-center gap-4">
						<div className="col-span-6">PACKAGE-NAME :</div>
						<div className="col-span-6">
							<select
								onChange={(e) =>
									setInput({
										...input,
										packageId: +e.target.value,
									})
								}
								name={input.packageId}
								className="w-full border px-4 py-2 rounded-lg outline-none"
							>
								<option
									// value={getBookingById.packageId}
									disabled="disabled"
									// hidden
								>
									{/* {getBookingById.package.name}
									{` `}
									{getBookingById.package.price} */}
									select package
								</option>
								{getPackageByRes.map((item, index) => (
									<option key={index} value={item.id}>
										{item.name} {` `} {item.price}
									</option>
								))}
							</select>
						</div>
					</div>
					{/* <div className="grid grid-cols-12">
						<div className="col-span-6">PRICE :</div>
						<div className="col-span-6">
							{getBookingById.package.price *
								(getBookingById.totalCustomer +
									getBookingById.totalKid / 2)}
						</div>
					</div> */}
					{varidate ? (
						<>
							<button
								onClick={handleClickEditBooking}
								className="bg-secondary px-4 py-2 rounded-full text-white hover:bg-secondary/70 hover:text-black"
							>
								UP TO DATE
							</button>
						</>
					) : (
						<>
							<button className="hidden bg-gray-600 px-4 py-2 rounded-full text-white">
								UP TO DATE
							</button>
						</>
					)}
					<button
						onClick={handleClickDeleteBooking}
						className="bg-secondary px-4 py-2 rounded-full text-white hover:bg-secondary/70 hover:text-black"
					>
						CANCEL BOOKING
					</button>
				</div>
			</div>
		</div>
	);
}
