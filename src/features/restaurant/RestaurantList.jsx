import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ data }) {
	// console.log(data);

	return (
			<div className="border border-gray-200 rounded-3xl max-w-[350px] cursor-pointer hover:shadow-lg hover:transition">
			<RestaurantItem
				image={data.restaurantImage}
				name={data.restaurantName}
				type={data.resType}
				starImage={data.star}
				price={data.price}
			/>
		</div>
	);
}
