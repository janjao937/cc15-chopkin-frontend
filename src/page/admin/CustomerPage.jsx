import React from "react";
import SearchInput from "../../components/SearchInput";
import CustomerList from "../../features/admin/CustomerList";
import axios from "../../config/axios";

import { mockCustomer } from "../../data/mock-customer";
import { useState } from "react";
import { useEffect } from "react";

export default function CustomerPage() {
	const [searchInput, setSearchInput] = useState("");
	const [allCustomer, setAllCustomer] = useState([]);
	//
	useEffect(() => {
		const fetchAllCus = async () => {
			try {
				const res = await axios.get("/customer/getAll");
				console.log("fetchAllCus =>", res.data);
				setAllCustomer(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllCus();
	}, []);
	//
	let filterdCusArr = allCustomer.filter((x) => {
		return (
			x.firstName.toLowerCase().includes(searchInput) ||
			x.id.toString().toLowerCase().includes(searchInput)
		);
	});
	if (searchInput.length === 0) {
		filterdCusArr = [];
	}
	return (
		<>
			<div className="flex flex-col gap-4 p-4 mb-10">
				<h1>All Customers</h1>
				<small className="mb-4">Hi, Welcome back to Admin!</small>

				<div className="mb-4">
					<SearchInput
						placeholder="Search customer name or id"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>

				{/* BookingList */}
				<div className="">
					<div className="grid grid-cols-12">
						<h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
							Customer ID
						</h1>
						<h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
							username
						</h1>
					</div>
					{filterdCusArr.length > 0
						? filterdCusArr.map((item) => (
								<div key={item.id}>
									<CustomerList data={item} />
								</div>
						  ))
						: allCustomer.map((item) => (
								<div key={item.id}>
									<CustomerList data={item} />
								</div>
						  ))}
				</div>
			</div>
		</>
	);
}
