import React from "react";
import useAuth from "../../Hooks/use-auth.js";

import imageBlank from "../../assets/blank.png";
import AsideMenu from "./AsideMenu";
import Header from "./Header";
import useRes from "../../Hooks/use-res.js";
import { useParams } from "react-router-dom";
import BookHistoryList from "./BookHistoryList.jsx";

export default function BookHistory() {
	const { userId } = useParams();

	const { authUser } = useAuth();
	// console.log("authUser", authUser);

	const { getBookingAll } = useRes();

	const myBooking = getBookingAll.filter(
		(item) => item.customerId === userId
	);
	console.log("myBooking =>", myBooking);

	return (
		<div className="flex flex-col m-4">
			<div className="grid grid-cols-12">
				{/* left */}
				<AsideMenu
					profileImg={authUser.profileImg}
					imageBlank={imageBlank}
				/>

				{/* right */}
				<div className="col-span-10 flex flex-col gap-4 mx-4">
					<div className="mb-10">
						{/* detail header */}
						<Header />
					</div>
					<div>
						{/* detail History */}
						{myBooking.length > 0 ? (
							<div className="flex flex-col gap-4 px-4 py-2">
								<div className="text-lg font-semibold">
									Booking History
								</div>
								<div className="grid grid-cols-12 gap-4">
									{myBooking.map((item, index) => (
										<div
											key={index}
											className="col-span-12 md:col-span-6 lg:col-span-4"
										>
											<BookHistoryList data={item} />
										</div>
									))}
								</div>
							</div>
						) : (
							<>
								<div>Not have MyBooking</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
