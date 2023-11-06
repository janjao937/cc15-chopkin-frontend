import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ data }) {
	// console.log("dataTest", data.status);

	return (
		<div className="border border-gray-200 rounded-3xl w-[280px] cursor-pointer hover:shadow-lg hover:transition">
			{data.status === 1 && (
				<RestaurantItem
					objRes={data}
					name={data.restaurantName}
					profileImg={data.profileImg}
					price={data.price}
					catIndex={data.categoryIndex}
				/>
			)}
		</div>
	);
}
