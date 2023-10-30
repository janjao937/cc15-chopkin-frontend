import React from "react";
import { AiFillStar } from "react-icons/ai";
import RestaurantList from "../features/restaurant/RestaurantList";

const mocRestaurant = [
	{
		id: 1,
		restaurantImage:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
		restaurantName: "reataurantName",
		resType: "Thai",
		star: <AiFillStar size={30} className="text-yellow-400" />,
		price: 1000,
	},
	{
		id: 2,
		restaurantImage:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
		restaurantName: "reataurantName",
		resType: "Thai",
		star: <AiFillStar size={30} className="text-yellow-400" />,
		price: 1000,
	},
	{
		id: 3,
		restaurantImage:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
		restaurantName: "reataurantName",
		resType: "Thai",
		star: <AiFillStar size={30} className="text-yellow-400" />,
		price: 1000,
	},
	{
		id: 4,
		restaurantImage:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oonV82rnxPstfh8eaUJRwoAR4kUhvOQR3Q&usqp=CAU",
		restaurantName: "reataurantName",
		resType: "Thai",
		star: <AiFillStar size={30} className="text-yellow-400" />,
		price: 1000,
	},
];

export default function HomePage() {
	return (
		<div>
			{/* image */}
			<div className="h-[200px] border border-red-600"></div>

			{/* Recommended Restaurants */}
			<div>Recommended Restaurants !</div>
			<div className="gap-16 grid lg:grid-cols-4 md:grid-cols-3 p-8">
				{mocRestaurant.map((item, index) => (
					<div key={index}>
						<RestaurantList data={item} />
					</div>
				))}
			</div>

			{/*  */}
		</div>
	);
}
