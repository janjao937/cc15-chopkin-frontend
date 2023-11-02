import React from "react";
import NewRestaurantItem from "./NewRestaurantItem";

export default function NewRestaurantList({ data }) {
	console.log(data);

	return (
		<>
			<NewRestaurantItem
				objData={data}
				ownerName={data.ownerFirstName}
				resName={data.restaurantName}
				email={data.email}
				phone={data.phone}
				located={data.district.name}
				type={data.category.name}
				nation={data.nation.name}
			/>
		</>
	);
}
