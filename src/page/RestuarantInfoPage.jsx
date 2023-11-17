import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import MyButton from "../components/MyButton";
import MyStepper from "../components/Stepper";
import MyRadio from "../components/MyRadio";
import RestaurantReview from "../components/RestaurantReview";
import useAuth from "../Hooks/use-auth";
import { useParams } from "react-router-dom";
import useRes from "../Hooks/use-res";
import profileImage from "../assets/logo.png";
import { useEffect } from "react";
import axios from "../config/axios";
import useBooking from "../Hooks/use-booking";
import ShowOnlyMap from "../features/googleMaps/ShowOnlyMap";
import { Carousel } from "@material-tailwind/react";
import Loading from "../components/Loading";

export default function RestaurantInfoPage() {
	// const {allPackage} = useBooking();
	const [allreviewMessage, setAllReviewMessage] = useState([]);
	const [cusReviewImg, setCusReviewImg] = useState([]);
	const [getResImage, setGetResImage] = useState([]);
	const [size, setSize] = useState(null);

	const handleOpen = (value) => {
		setSize(value);
		// setOpen(!open);
	};

	useEffect(() => {
		axios
			.get(`http://localhost:8888/review/${resId}`)
			.then((res) => setAllReviewMessage(res.data))
			.catch((e) => console.log(e));
	}, []);

	console.log(`ALL =========> `, allreviewMessage);

	const [allPackage, setAllPackage] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:8888/package/getAll/${resId}`)
			.then((res) => setAllPackage(res.data))
			.catch((e) => console.log(e));
	}, []);

	const { authUser } = useAuth();
	const { resId } = useParams();
	const isRestaurant = authUser?.restaurantName;
	const isCustomer = authUser?.firstName;
	const isAdmin = authUser?.isAdmin;

	const { restaurantAll } = useRes();

	// console.log(authUser);
	// console.log(`resId=======>`, resId);
	// console.log(`Res All=====>`, restaurantAll);

	const res = restaurantAll.find((item) => item.id === resId);
	console.log("myRes =>", res);

	const [openMenu, setOpenMenu] = useState(false);
	const [booking, setBooking] = useState(false);

	const handleOpenMenu = (itemId) => {
		setOpenMenu(itemId === openMenu ? null : itemId);
	};

	const handleBooking = () => {
		setBooking(!booking);
	};

	useEffect(() => {
		const fetchResByResId = async () => {
			try {
				const res = await axios.get(`/restaurant/resById/${resId}`);
				console.log("getResImage=>", res.data);
				setGetResImage(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchResByResId();
	}, []);

	return (
		<div className="flex flex-col justify-center px-32">
			<main className="flex gap-5">
				<section className="flex-1 flex flex-col gap-5">
					<div className="flex justify-between">
						<div className="flex items-center gap-5">
							{/* <img src={profileImage} className="w-[100px]"></img> */}
							{res?.profileImg ? (
								<img
									className="w-[100px] rounded-full"
									src={res.profileImg}
									alt=""
								/>
							) : (
								<img
									src={profileImage}
									className="w-[100px]"
								></img>
							)}
							<div>
								<p className="text-2xl font-semibold">
									{res?.restaurantName}
								</p>
								{/* <p>res name</p> */}
								<div className="flex gap-5">
									<p className="">Open Time:</p>
									{res?.BusinessTimes.map((item) => (
										<div className="flex gap-2">
											<p className="font-semibold">
												{item.day == 1
													? "mon:"
													: item.day == 2
													? "tue:"
													: item.day == 3
													? "wed:"
													: item.day == 4
													? "thurs:"
													: item.day == 5
													? "fri:"
													: item.day == 6
													? "sat:"
													: "sun:"}
											</p>
											<p>{item.openTime} </p>
										</div>
									))}
								</div>
							</div>
						</div>
						<div onClick={() => handleOpen("md")}>
							{getResImage?.RestaurantImages?.length > 0 ? (
								<img
									className="w-[400px] h-[200px]"
									src={getResImage?.RestaurantImages[0].url}
									alt=""
								/>
							) : undefined}
						</div>
					</div>

					{/* GOOGLE MAP */}
					<div className="flex flex-col items-center relative right-[38%] gap-3">
						<div className="border-2 rounded-md">
							<ShowOnlyMap
								center={{
									lat: res?.latitude,
									lng: res?.longitude,
								}}
							/>
						</div>
						<a
							href={`https://maps.google.com/?q=${res?.latitude},${res?.longitude}`}
							target="_blank"
						>
							<button className="bg-primary py-2 px-4 rounded-md text-white ">
								ดูเส้นทาง
							</button>
						</a>
					</div>

					{allPackage.length > 0 ? (
						<div>
							<p className="font-light">Packages</p>
							<div className="border-l-8 shadow-xl border-primary">
								{allPackage.map((item, index) => (
									<section key={index}>
										<div className="flex py-10 px-4 border border-gray-100">
											<div className="flex-1 flex flex-col justify-between gap-2">
												<p className="font-semibold text-xl">
													{item.name}
												</p>
												<button
													onClick={() =>
														handleOpenMenu(item.id)
													}
													className={`w-[80px] cursor-pointer outline outline-primary rounded-full outline-2 py-1 px-4 text-primary`}
												>
													Menu
												</button>
											</div>
											<div className="flex-1">
												<p className="text-gray-500 text-md">
													{item.detail}
												</p>
											</div>
											<div className="flex-1 text-center">
												<p>{item.price}</p>
											</div>
											{/* <MyButton style={`bg-primary h-[40px] rounded-md`}>
                      Booking
                    </MyButton> */}
										</div>

										{openMenu === item.id ? (
											<div>
												<div className="flex p-4">
													<div className="flex-1">
														<p className="font-semibold">
															รอบเวลาที่เปิดจอง
														</p>

														<div className="flex">
															<section className="flex w-[50%]">
																<div className="w-[100%]">
																	{res?.BusinessTimes.map(
																		(
																			item,
																			index
																		) => (
																			<div
																				className="flex gap-2 flex-1"
																				key={
																					index
																				}
																			>
																				<p className="flex-1">
																					{item.day ==
																					1
																						? "mon"
																						: item.day ==
																						  2
																						? "tue"
																						: item.day ==
																						  3
																						? "wed"
																						: item.day ==
																						  4
																						? "thurs"
																						: item.day ==
																						  5
																						? "fri"
																						: item.day ==
																						  6
																						? "sat"
																						: "sun"}
																				</p>
																				<p className="flex-1">
																					{
																						item.openTime
																					}
																				</p>
																				<p>
																					-
																				</p>
																				<p className="flex-1 text-end">
																					{
																						item.closedTime
																					}
																				</p>
																			</div>
																		)
																	)}
																</div>
															</section>
														</div>
													</div>
													<div className="flex-1">
														<p className="font-semibold">
															รายละเอียดแพ็กเกจ
														</p>
														<p>{item.detail}</p>
													</div>
												</div>
												<img
													className="w-full"
													src={item.img}
													alt=""
												/>
												<div className="text-center p-4">
													<button
														onClick={handleOpenMenu}
														className={`w-[80px] cursor-pointer outline outline-primary rounded-full outline-2 py-1 px-4`}
													>
														Close
													</button>
												</div>
											</div>
										) : undefined}
									</section>
								))}
							</div>
						</div>
					) : (
						<p className="text-center p-5 border bg-gray-200">
							No package
						</p>
					)}
				</section>

				{isCustomer && (
					<section className="w-[300px] self-start  border border-gray-100 shadow-md sticky top-16 max-h-[500px] overflow-auto">
						<div className="w-full py-4 px-8">
							{booking ? (
								<div className="flex flex-col gap-4">
									{/* <MyRadio /> */}

									<MyStepper
										setBooking={setBooking}
										booking={booking}
										allPackage={allPackage}
										resId={resId}
										res={res}
									/>
								</div>
							) : (
								<div>
									{allPackage.length > 0 ? (
										<div className="flex flex-col gap-4">
											<p className="text-primary">
												Click To Booking
											</p>
											<hr />
											<MyButton
												style={`h-10 bg-secondary text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 rounded-full`}
												onClick={handleBooking}
											>
												BOOK NOW
											</MyButton>
										</div>
									) : (
										<div className="flex flex-col gap-4">
											<p className="text-primary">
												Cannot Booking
											</p>
											<hr />
											<MyButton
												style={`bg-gray-400 w-full rounded-full`}
												disabled={true}
											>
												NO PACKAGE
											</MyButton>
										</div>
									)}
								</div>
							)}
						</div>
					</section>
				)}
			</main>
			{/* {authUser.firstName ? <RestaurantReview /> : undefined} */}
			<div className="flex justify-center gap-5">
				<RestaurantReview
					resId={resId}
					allreviewMessage={allreviewMessage}
					setAllReviewMessage={setAllReviewMessage}
					res={res}
					cusReviewImg={cusReviewImg}
					allPackage={allPackage}
				/>
			</div>
			<Dialog
				className="rounded-3xl"
				open={
					size === "xs" ||
					size === "sm" ||
					size === "md" ||
					size === "lg" ||
					size === "xl" ||
					size === "xxl"
				}
				size={size || "md"}
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
			>
				{/* <DialogHeader></DialogHeader> */}
				<DialogBody className="overflow-hidden bg-secondary rounded-2xl">
					{getResImage?.RestaurantImages?.length > 0 ? (
						<div className="flex">
							<Carousel
								className="rounded-xl overflow-hidden"
								transition={{ duration: 1 }}
							>
								{getResImage?.RestaurantImages?.map(
									(item, index) => (
										<div key={index}>
											<img
												src={item.url}
												alt="res-image"
												className="bg-cover object-cover w-full rounded-lg"
											/>
										</div>
									)
								)}
							</Carousel>
						</div>
					) : (
						<div className="flex items-center justify-center text-xl">
							No Restaurant Images
						</div>
					)}
				</DialogBody>
				{/* <DialogFooter></DialogFooter> */}
			</Dialog>
		</div>
	);
}
