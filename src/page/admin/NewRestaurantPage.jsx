import React from "react";
import NewRestaurantList from "../../features/restaurant/NewRestaurantList";

const mockFatchRestaurant = [
	{
		id: 1,
		restaurantName: "res1",
		ownerFirstName: "john",

		email: "john@gmail.com",
		phone: "0811111111",

		category: {
			name: "coffee",
		},

		district: {
			name: "Bangkok",
		},

		nation: {
			name: "Thai",
		},
	},
	{
		id: 2,
		restaurantName: "res2",
		ownerFirstName: "jane",

		email: "jane@gmail.com",
		phone: "0822222222",

		category: {
			name: "coffee",
		},

		district: {
			name: "Bangkok",
		},
		nation: {
			name: "Thai",
		},
	},
];

export default function NewRestaurantPage() {
	return (
		<div className="flex flex-col gap-2 p-4">
			<h1>New Restaurant</h1>
			<small className="mb-4">Hi, Welcome back to Admin!</small>

			<div className="flex flex-col gap-4 items-center justify-center px-4 py-2">
				{mockFatchRestaurant.map((item, index) => (
					<div key={index}>
						<NewRestaurantList data={item} />
					</div>
				))}
			</div>
		</div>
	);
}
