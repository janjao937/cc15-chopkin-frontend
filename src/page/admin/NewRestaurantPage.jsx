import React from "react";
import NewRestaurantList from "../../features/restaurant/NewRestaurantList";

import { mockRestaurant } from "../../data/mock-restaurant";

export default function NewRestaurantPage() {
	return (
		<div className="flex flex-col gap-2 p-4">
			<h1>New Restaurant</h1>
			<small className="mb-4">Hi, Welcome back to Admin!</small>

			<div className="flex flex-col gap-4 items-center justify-center px-4 py-2">
				{mockRestaurant.map((item, index) => (
					<div key={index}>
						<NewRestaurantList data={item} />
					</div>
				))}
			</div>
		</div>
	);
}
