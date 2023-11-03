import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ data }) {
	console.log("dataTest", data.status);

	return (
		<div className="border border-gray-200 rounded-3xl max-w-[350px] cursor-pointer hover:shadow-lg hover:transition">
			{data.status === 1 && (
				<RestaurantItem
					objRes={data}
					id={data.id}
					name={data.restaurantName}
					ownerFirstName={data.ownerFirstName}
					ownerLastName={data.ownerLastName}
					email={data.email}
					phone={data.phone}
					profileImg={data.profileImg}
					latitude={data.latitude}
					longitude={data.longitude}
					price={data.price}
					categoryIndex={data.categoryIndex}
					districtIndex={data.districtIndex}
					nationIndex={data.nationIndex}
					status={data.status}
					Reviews={data.Reviews}
					BusinessTimes={data.BusinessTimes}
				/>
			)}
		</div>
	);
}
