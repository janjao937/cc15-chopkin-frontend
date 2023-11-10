import React from "react";
import useRes from "../Hooks/use-res";
import { dataCuisine } from "../data/dataRes";
import RestaurantList from "../features/restaurant/RestaurantList";
import DefaultCarousel from "../components/DefaultCarousel";
import CuisineList from "../features/restaurant/CuisineList";
import { MdKeyboardArrowRight } from "react-icons/md";
import bgHome from "../assets/image/bgHome.png";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SearchList from "../components/SearchList";
import { useState } from "react";

export default function HomePage() {
	const { restaurantAll } = useRes();
	const [searchInput, setSearchInput] = useState("");
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
					<SearchInput
						placeholder="Search a restaurant"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<SearchList searchInput={searchInput} />
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

				<div className="grid grid-cols-12 items-center justify-items-center gap-4">
					{restaurantAll?.map((item, index) => (
						<div key={index} className=" grid col-span-4">
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
					{dataCuisine.map((item, index) => (
						<div key={index}>
							<CuisineList data={item} />
						</div>
					))}
				</div>

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
					<div className="grid grid-cols-12 items-center justify-items-center gap-4">
						{restaurantAll?.map((item, index) => (
							<div key={index} className=" grid col-span-4">
								<RestaurantList data={item} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
