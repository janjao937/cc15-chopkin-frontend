import React from "react";
import NewRestaurantItem from "./NewRestaurantItem";

export default function NewRestaurantList({ data, index }) {
	console.log("mockFatchRestaurant ==>", data);

	return (
		<>
			<NewRestaurantItem
				index={index}
				objData={data}
				resId={data.id}
				ownerName={data.ownerFirstName}
				resName={data.restaurantName}
				email={data.email}
				phone={data.phone}
				located={data.districtIndex}
				type={data.categoryIndex}
				nation={data.nationIndex}
				status={data.status}
			/>
		</>
	);
}
