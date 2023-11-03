import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { getAccessToken } from "../utils/local-storage";

export const ResContext = createContext();

export default function ResContextProvider({ children }) {
	const [reqRestaurant, setReqRestaurant] = useState([]);
	const [restaurantAll, setRestaurantAll] = useState([]);

	useEffect(() => {
		fatchResAll();
	}, []);

	useEffect(() => {
		if (getAccessToken()) {
			fatchRequestRes();
		}
	}, []);

	const fatchRequestRes = async () => {
		const res = await axios.get("/restaurant/getPendingRes");
		console.log("fatchRequestRes==>", res.data);
		setReqRestaurant(res.data);
	};

	const changeStatusRes = async (resId) => {
		try {
			const res = await axios.patch(`/restaurant/updateStatus/${resId}`);
			console.log("changeStatusRes=>", res);
		} catch (err) {
			console.log(err);
		}
	};

	const fatchResAll = async () => {
		try {
			const res = await axios.get("/restaurant/all");
			console.log("fatchResAll=>", res.data);
			setRestaurantAll(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ResContext.Provider
			value={{ reqRestaurant, changeStatusRes, restaurantAll }}
		>
			{children}
		</ResContext.Provider>
	);
}
