import React from "react";
import SearchInput from "../../components/SearchInput";
import RequestList from "../../features/admin/RequestList";

import { restaurantPendingEdit } from "../../data/mock-restaurantEdit";
import { packageEditPending } from "../../data/mock-restaurantEdit";

export default function EditingPage() {
	return (
		<>
			<div className="flex flex-col gap-4 p-4 mb-10">
				<h1>Edit Request</h1>
				<small className="mb-4">Hi, Welcome back to Admin!</small>

				<div className="mb-4">
					<SearchInput placeholder="Search Booking ID or Name" />
				</div>

				{/* BookingList */}
				<div className="">
					<div className="grid grid-cols-12">
						<h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
							Request ID
						</h1>
						<h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
							Restaurant Name
						</h1>
					</div>
					{restaurantPendingEdit.map((item, index) => (
						<div key={index}>
							<RequestList data={item} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
