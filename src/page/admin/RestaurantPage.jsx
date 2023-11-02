import React from "react";
import RestaurantList from "../../features/restaurant/RestaurantList";
import { mockRestaurant } from "../../data/mock-data";

export default function RestaurantPage() {
	return (
		<div className="flex flex-col gap-2 p-4">
			<h1>Restaurant List</h1>
			<small className="mb-4">Hi, Welcome back to Admin!</small>

			<div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
				{mockRestaurant.map((item, index) => (
					<div key={index} className="">
						<RestaurantList data={item} />
					</div>
				))}
			</div>
		</div>
	);
}
