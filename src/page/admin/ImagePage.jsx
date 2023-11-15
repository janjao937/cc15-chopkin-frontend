import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput";
import ImageList from "../../features/admin/ImageList";
import useRes from "../../Hooks/use-res";

export default function ImagePage() {
	const {} = useRes();
	//
	const [searchInput, setSearchInput] = useState("");

	// useEffect(() => {
	// 	fatchPendingEdit();
	// }, []);

	// const filteredRequests = fatchResPendding.filter(
	// 	(x) =>
	// 		x.restaurantName.toLowerCase().includes(searchInput) ||
	// 		x.id.toString().toLowerCase().includes(searchInput)
	// );

	// if (editRequestLoading) return <Loading />;
	return (
		<>
			<div className="flex flex-col gap-4 p-4 mb-10">
				<h1>Edit Request</h1>
				<small className="mb-4">Hi, Welcome back to Admin!</small>

				<div className="mb-4">
					<SearchInput
						placeholder="Search Booking ID or Name"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>

				{/* EditPenddingList */}
				<div className="">
					<div className="grid grid-cols-12">
						<h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
							Request ID
						</h1>
						<h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
							Restaurant Name
						</h1>
					</div>

					{[{ id: 1, name: "test" }].map((item, index) => (
						<div key={index}>
							<ImageList data={item} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
