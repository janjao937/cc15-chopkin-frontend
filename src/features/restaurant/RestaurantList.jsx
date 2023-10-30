import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ data }) {
	console.log(data);

	return (
		<div className="border px-2 py-2 rounded-md">
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
