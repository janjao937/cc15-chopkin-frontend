import React from "react";

export default function RestaurantItem({
	image,
	name,
	type,
	starImage,
	price,
}) {
	return (
		<>
			<div className="flex flex-col gap-2">
				<div className="w-[200px] h-[100px] border">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-md"
					/>
				</div>
				<div>{name}</div>
				<div>{type}</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<div>{starImage}</div>
						<div>3.0</div>
					</div>
					<div>{price}</div>
				</div>
			</div>
		</>
	);
}
