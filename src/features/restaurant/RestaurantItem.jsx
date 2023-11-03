import React from "react";
import blank from "../../assets/blank.png";
import { Link } from "react-router-dom";

export default function RestaurantItem({
	objRes,
	id,
	name,
	ownerFirstName,
	ownerLastName,
	email,
	phone,
	profileImg,
	latitude,
	longitude,
	price,
	categoryIndex,
	districtIndex,
	nationIndex,
	status,
	Reviews,
	BusinessTimes,
}) {
	return (
		<>
			<Link to={`/restaurant/${id}`}>
				<div className="w-full h-[200px]">
					<img
						src={blank}
						alt={name}
						className="w-full h-full object-fill rounded-t-3xl"
					/>
				</div>
				<div className="p-4">
					<div className="font-semibold text-lg">{name}</div>
					<div className="font-light text-md ">{categoryIndex}</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1">
							<div>{`starImage`}</div>
							<div className="text-primary font-semibold">
								3.0
							</div>
						</div>
						<div className="text-primary font-semibold">
							{price}
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
