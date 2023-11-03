import React from "react";
// import { AiFillStar } from "react-icons/ai";
import RestaurantList from "../features/restaurant/RestaurantList";
import DefaultCarousel from "../components/DefaultCarousel";
import { MdKeyboardArrowRight } from "react-icons/md";
import CuisineList from "../features/restaurant/CuisineList";
import bgHome from "../assets/image/bgHome.png";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { mockRestaurant } from "../data/mock-data";
import Login from "../features/googleAuth/login";
import { useEffect } from "react";
// console.log(mockRestaurant);

const mocCuisine = [
	{
		id: 1,
		restaurantImage:
			"https://imgproxy2.hungryhub.com/insecure/fill/340/530/ce/0/aHR0cHM6Ly9pbWFnZXMuaHVuZ3J5aHViLmNvbS91cGxvYWRzL3Jlc3RhdXJhbnRfdGFnL2NvdmVyLzEwL3BleGVscy10aGUtY2FzdGxlYmFyLTU4OTM1MzMuanBn.webp",
		restaurantName: "reataurantName",
		resType: "International",
		price: 1000,
	},
	{
		id: 2,
		restaurantImage:
			"https://imgproxy2.hungryhub.com/insecure/fill/340/530/ce/0/aHR0cHM6Ly9pbWFnZXMuaHVuZ3J5aHViLmNvbS91cGxvYWRzL3Jlc3RhdXJhbnRfdGFnL2NvdmVyLzEwOC9wZXhlbHMtYXVndXN0aW51cy1tYXJ0aW51cy1ub3BwZSVDQyU4MS0xMjg2NjQ5OC5qcGc=.webp",
		restaurantName: "reataurantName",
		resType: "Thai",
		price: 1000,
	},
	{
		id: 3,
		restaurantImage:
			"https://imgproxy2.hungryhub.com/insecure/fill/340/530/ce/0/aHR0cHM6Ly9pbWFnZXMuaHVuZ3J5aHViLmNvbS91cGxvYWRzL3Jlc3RhdXJhbnRfdGFnL2NvdmVyLzExL3BleGVscy0lRTUlQTUlQTUlRTUlQjAlQkMlRTUlQjAlOTQtJUU1JUFEJTk5LTI4NzE3NTYuanBn.webp",
		restaurantName: "reataurantName",
		resType: "Japanese",
		price: 1000,
	},
	{
		id: 4,
		restaurantImage:
			"https://imgproxy2.hungryhub.com/insecure/fill/340/530/ce/0/aHR0cHM6Ly9pbWFnZXMuaHVuZ3J5aHViLmNvbS91cGxvYWRzL3Jlc3RhdXJhbnRfdGFnL2NvdmVyLzcvU19fMTIyMjI0OTYuanBn.webp",
		restaurantName: "reataurantName",
		resType: "Chinese",
		price: 1000,
	},
	{
		id: 5,
		restaurantImage:
			"https://imgproxy2.hungryhub.com/insecure/fill/340/530/ce/0/aHR0cHM6Ly9pbWFnZXMuaHVuZ3J5aHViLmNvbS91cGxvYWRzL3Jlc3RhdXJhbnRfdGFnL2NvdmVyLzE2L3BleGVscy1hbnRvbnktdHJpdmV0LTE0MTY0Njc2LmpwZw==.webp",
		restaurantName: "reataurantName",
		resType: "Fusion",
		price: 1000,
	},
	{
		id: 6,
		restaurantImage:
			"https://imgproxy2.hungryhub.com/insecure/fill/340/530/ce/0/aHR0cHM6Ly9pbWFnZXMuaHVuZ3J5aHViLmNvbS91cGxvYWRzL3Jlc3RhdXJhbnRfdGFnL2NvdmVyLzgvU19fMTIyMjI1MDYuanBn.webp",
		restaurantName: "reataurantName",
		resType: "Italian",
		price: 1000,
	},
];

export default function HomePage() {
	return (
		<div>
			{/* image */}
			<div className="mb-8 relative">
				<div className="h-[300px] w-full ">
					<img
						src={bgHome}
						alt="bgHome"
						className="w-full h-full object-cover"
					/>
				</div>
				{/* Search */}
				<div className="absolute bottom-[-8%] left-[35%]">
					<SearchInput />
				</div>
			</div>

			{/* Recommended Restaurants */}
			<div className="mb-4 px-4">
				<div className="text-xl font-semibold">
					Recommended Restaurants !
				</div>
				<div className="flex items-center gap-2 mb-2">
					{/* It's on trend right now, try it! */}
					<Link to="/recommended">
						<span className="flex items-center text-red-600 cursor-pointer">
							See More <MdKeyboardArrowRight size={30} />
						</span>
					</Link>
				</div>
				<div className="border grid grid-cols-2 md:grid-cols-4 gap-2">
					{mockRestaurant.map((item, index) => (
						<div key={index}>
							<RestaurantList data={item} />
						</div>
					))}
				</div>
			</div>

			{/* carousel */}

			<div className="mb-4 px-4">
				<div className=" h-[300px] w-full ">
					<DefaultCarousel />
				</div>
			</div>

			{/* Top Cuisine */}
			<div className="mb-4">
				<h1 className="text-center text-xl font-semibold">
					Top Cuisine
				</h1>
				<div className="flex items-center justify-evenly">
					{mocCuisine.map((item, index) => (
						<div key={index}>
							<CuisineList data={item} />
						</div>
					))}
				</div>

			<Login></Login>

			{/* All Restaurants */}
			<div className="mb-4 mx-4">
				<h1 className=" text-xl font-semibold">All Restaurants</h1>
				<div className="flex items-center gap-2 mb-2">
					{/* It's on trend right now, try it! */}
					<Link to="/all-restaurants">
						<span className="flex items-center text-red-600 cursor-pointer">
							See More <MdKeyboardArrowRight size={30} />
						</span>
					</Link>
				</div>
				<div className="border grid grid-cols-2 md:grid-cols-4 gap-2">
					{mockRestaurant.map((item, index) => (
						<div key={index} className="gi">
							<RestaurantList data={item} />
						</div>
					))}
				</div>
			</div>
		</div>
		</div>
	);
}
