import React from "react";
import { Link } from "react-router-dom";

export default function CuisineItem({ id, image, type }) {
	return (
		<Link to={`/nation/${id}`}>
			<div className="relative">
				<div className="w-[180px] h-[250px] ">
					<div className="w-full h-full absolute bg-black/10 rounded-lg"></div>
					<img
						src={image}
						alt={type}
						className="w-full h-full rounded-lg"
					/>
				</div>

				<div className="absolute bottom-2 left-2">
					<div className="text-white text-lg font-semibold">
						{type}
					</div>
					<div className="text-white text-md">222 Restaurants</div>
				</div>
			</div>
		</Link>
	);
}
