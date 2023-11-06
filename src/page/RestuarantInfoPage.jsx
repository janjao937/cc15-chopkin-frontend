import { useState } from "react";
import MyButton from "../components/MyButton";
import MyStepper from "../components/Stepper";
import MyRadio from "../components/MyRadio";
import RestaurantReview from "../components/RestaurantReview";

const mockRestuarantInfo = {
	id: 1,
	resName: "RestaurantName",
	restaurantImage:
		"https://images.unsplash.com/photo-1479044769763-c28e05b5baa5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVhcmFudHxlbnwwfHwwfHx8MA%3D%3D",
	resType: "International",
	location: "พญาไท",
	dateTime: "12.00 - 19.15",
};

const mockPackage = [
	{
		id: 1,
		packageName: "Premium Buffet",
		packageInfo:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
		price: 3000,
		menuImage:
			"https://images.unsplash.com/photo-1625173616412-7b403d49a41e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		packageName: "Great Great Harbour: Weekday Buffet",
		packageInfo:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
		price: 3000,
		menuImage:
			"https://images.unsplash.com/photo-1515697320591-f3eb3566bc3c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVudXxlbnwwfHwwfHx8MA%3D%3D",
	},
	{
		id: 3,
		packageName: "Great Harbour: Weekend Buffet ",
		packageInfo:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
		price: 3000,
		menuImage:
			"https://images.unsplash.com/photo-1579042877201-21342f2083a5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnV8ZW58MHx8MHx8fDA%3D",
	},
	{
		id: 4,
		packageName: "Great Harbour: วันหยุดยาว",
		packageInfo:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Aperiam aut vero dignissimos mollitia odit architecto beatae ab exercitationem!",
		price: 3000,
		menuImage:
			"https://images.unsplash.com/photo-1617298452285-ceb241df5c67?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnV8ZW58MHx8MHx8fDA%3D",
	},
];

export default function RestaurantInfoPage() {
	const [openMenu, setOpenMenu] = useState(false);
	const [booking, setBooking] = useState(false);

	const handleOpenMenu = (itemId) => {
		setOpenMenu(itemId === openMenu ? null : itemId);
	};

	const handleBooking = () => {
		setBooking(!booking);
	};

	return (
		<div className="flex flex-col justify-center">
			<main className="flex px-64 gap-5">
				<section className="flex-1">
					<div className="flex justify-between">
						<div className="flex items-center">
							<img
								className="w-[100px] h-[100px] rounded-full"
								src={mockRestuarantInfo.restaurantImage}
								alt=""
							/>
							<div>
								<p>{mockRestuarantInfo.resName}</p>
								<div className="flex gap-5">
									<p className="">
										{mockRestuarantInfo.resName}
									</p>
									<p className="">
										{mockRestuarantInfo.resType}
									</p>
									<p className="">
										{mockRestuarantInfo.dateTime}
									</p>
								</div>
							</div>
						</div>
						<div>
							<img
								className="w-[400px] h-[200px]"
								src={mockRestuarantInfo.restaurantImage}
								alt=""
							/>
						</div>
					</div>

					<div>
						<p className="font-light">Packages</p>
						<div className="border-l-8 shadow-xl border-primary">
							{mockPackage.map((item, index) => (
								<section key={index}>
									<div className="flex py-10 px-4 shadow-sm border border-gray-100">
										<div className="flex-1 flex flex-col justify-between">
											<p className="font-semibold">
												{item.packageName}
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
											<p className="text-gray-500 text-xs">
												{item.packageInfo}
											</p>
										</div>
										<div className="flex-1 text-center">
											<p>{item.price}</p>
										</div>
										<MyButton
											style={`bg-primary h-[40px] rounded-md`}
										>
											Booking
										</MyButton>
									</div>

									{openMenu === item.id ? (
										<div>
											<div className="flex p-4">
												<div className="flex-1">
													<p>รอบเวลาที่เปิดจอง</p>

													<div className="flex  justify-around">
														<div className="flex">
															<section>
																{" "}
																<p>จันทร์</p>
																<p>อังคาร</p>
																<p>พุธ</p>
																<p>พฤหัสบดี</p>
															</section>
															<section>
																<p>Datetime</p>
																<p>Datetime</p>
																<p>Datetime</p>
																<p>Datetime</p>
															</section>
														</div>

														<div className="flex">
															<section>
																{" "}
																<p>ศุกร์</p>
																<p>เสาร์</p>
																<p>อาทิตย์</p>
															</section>
															<section>
																<p>Datetime</p>
																<p>Datetime</p>
																<p>Datetime</p>
															</section>
														</div>
													</div>
												</div>
												<div className="flex-1">
													<p>รายละเอียดแพ็กเกจ</p>
												</div>
											</div>
											<img
												className="w-full"
												src={item.menuImage}
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
				</section>

				<section className="w-[300px] self-start  border border-gray-100 shadow-md sticky top-16 max-h-[500px] overflow-auto">
					<div className="w-full py-4 px-8">
						{booking ? (
							<div className="flex flex-col gap-4">
								<MyStepper
									setBooking={setBooking}
									booking={booking}
								/>
								<MyRadio />

								<MyStepper
									setBooking={setBooking}
									booking={booking}
									mockPackage={mockPackage}
								/>
							</div>
						) : (
							<div className="flex flex-col gap-4">
								<p className="text-primary">Click to Book</p>
								<hr />
								<MyButton
									style={`bg-secondary w-full rounded-full`}
									onClick={handleBooking}
								>
									BOOK NOW
								</MyButton>
							</div>
						)}
					</div>
				</section>
			</main>
			<RestaurantReview />
		</div>
	);
}
