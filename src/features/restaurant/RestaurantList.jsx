import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ data }) {
	console.log(data);

	return (
			<div className="border rounded-lg max-w-[400px] cursor-pointer hover:shadow-lg hover:transition">
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
