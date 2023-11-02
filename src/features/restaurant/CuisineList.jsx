import React from "react";
import CuisineItem from "./CuisineItem";

export default function CuisineList({ data }) {
	return (
		<>
			<div className="px-2 py-2 ">
				<CuisineItem
					image={data.restaurantImage}
					name={data.restaurantName}
					type={data.resType}
				/>
			</div>
		</>
	);
}
