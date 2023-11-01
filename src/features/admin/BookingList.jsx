import React from "react";
import BookingItem from "../../features/admin/BookingItem";

export default function BookingList({ data }) {
	console.log(data);

	return (
		<>
			<BookingItem
				obj={data}
				id={data.id}
				firstName={data.customer.firstName}
				email={data.customer.email}
				phone={data.customer.phone}
				date={data.createdAt}
				totalCustomer={data.totalCustomer}
				totalKid={data.totalKid}
				reataurantName={data.reataurant.reataurantName}
				packageName={data.reataurant.package.name}
				packPrice={data.reataurant.package.price}
			/>
		</>
	);
}
