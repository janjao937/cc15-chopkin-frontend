import React from "react";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";

export default function Menu() {
	const { userId } = useParams();
	const menuCus = [
		{
			id: 1,
			to: `/profile/${userId}`,
			text: "Reservation",
		},
		{
			id: 2,
			to: `/profile/${userId}/favorite`,
			text: "Favorite",
		},
		{
			id: 3,
			to: `/profile/${userId}/book-history`,
			text: "Booking History",
		},
		{
			id: 4,
			to: `/profile/${userId}/voucher`,
			text: "My Vouchers",
		},
		{
			id: 5,
			to: `/profile/${userId}/gift`,
			text: "My Offer and Gift Card",
		},
		{
			id: 6,
			to: `/profile/${userId}/benefits`,
			text: "Benefits",
		},
		{
			id: 7,
			to: `/profile/${userId}/address`,
			text: "My Addresses",
		},
	];
	return (
		<div className="flex flex-col shadow-lg border rounded-md max-w-[200px] items-stretch mx-auto justify-center ">
			{menuCus.map((item, index) => (
				<div key={index} className="">
					<MenuList data={item} />
				</div>
			))}
		</div>
	);
}
