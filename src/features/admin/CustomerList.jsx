import React from "react";
import CustomerItem from "./CustomerItem";

export default function CustomerList({ data }) {
	// console.log(data);

	return (
		<>
			<CustomerItem
				obj={data}
				id={data.id}
				firstName={data.firstName}
				lastName={data.lastName}
				email={data.email}
				phone={data.phone}
				profileImage={data.profileImage}
			/>
		</>
	);
}
