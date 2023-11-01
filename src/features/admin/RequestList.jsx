import React from "react";
import RequestItem from "./RequestItem";

export default function RequestList({ data }) {
	console.log(data);

	return (
		<>
			<RequestItem
				obj={data}
				restaurantId={data.restaurantId}
				restaurantName={data.restaurantName}
				categoryIndex={data.categoryIndex}
				districIndex={data.districIndex}
				nationIndex={data.nationIndex}
				latitude={data.latitude}
				longitude={data.longitude}
				profileImg={data.profileImg}
			/>
		</>
	);
}
