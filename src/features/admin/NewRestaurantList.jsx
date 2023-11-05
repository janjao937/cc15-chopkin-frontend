import React from "react";
import NewRestaurantItem from "./NewRestaurantItem";

export default function NewRestaurantList({ data, index }) {
	// console.log("newRes ==>", data);

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
				districtIndex={data.districtIndex}
				latitude={data.latitude}
				longitude={data.longitude}
				type={data.categoryIndex}
				nation={data.nationIndex}
				status={data.status}
			/>
		</>
	);
}
