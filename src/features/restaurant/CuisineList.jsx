import React from "react";
import CuisineItem from "./CuisineItem";

export default function CuisineList({ data }) {
	return (
		<>
			<div className="px-2 py-2 ">
				<CuisineItem
					id={data.id}
					image={data.restaurantImage}
					type={data.resType}
				/>
			</div>
		</>
	);
}
