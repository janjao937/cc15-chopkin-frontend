import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput";
import AdminChatList from "../../features/Chat/AdminChatList";

const room = [
	{
		id: "id-cus1",
		name: "cus1",
	},
	{
		id: "id-cus1",
		name: "cus1",
	},
];

export default function ChatPage() {
	return (
		<>
			<div className="flex flex-col gap-4 p-4 mb-10 max-w-[1200px] mx-auto">
				<h1>Edit Request</h1>
				<small className="mb-4">Hi, Welcome back to Admin!</small>

				<div className="mb-4">
					<SearchInput
						placeholder="Search Booking ID or Name"
						// value={searchInput}
						// onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>

				{/* EditPenddingList */}
				<div className="">
					<div className="grid grid-cols-12">
						<h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
							Room ID
						</h1>
						<h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
							Username
						</h1>
					</div>
					{room.length > 0
						? room.map((item, index) => (
								<div key={index}>
									<AdminChatList data={item} />
								</div>
						  ))
						: room.map((item, index) => (
								<div key={index}>
									<AdminChatList data={item} />
								</div>
						  ))}
				</div>
			</div>
		</>
	);
}
