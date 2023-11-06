import React from "react";
import RequestItem from "./RequestItem";

export default function RequestList({ data }) {
	// console.log(data);

	return (
		<>
			<RequestItem
				obj={data}
				restaurantName={data.restaurantName}
				profileImg={data.profileImg}
				latitude={data.latitude}
				longitude={data.longitude}
				price={data.price}
				cateIndex={data.categoryIndex}
				disIndex={data.districIndex}
				natIndex={data.nationIndex}
				restaurantId={data.restaurantId}
				tempBusinessTimes={data.tempBusinessTimes}
				tempRestaurantImages={data.tempRestaurantImages}
			/>
		</>
	);
}
