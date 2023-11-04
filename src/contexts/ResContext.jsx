import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import useAuth from "../Hooks/use-auth";

export const ResContext = createContext();

export default function ResContextProvider({ children }) {
	const { authUser } = useAuth();

	const [reqRestaurant, setReqRestaurant] = useState([]);
	const [restaurantAll, setRestaurantAll] = useState([]);

	useEffect(() => {
		fatchResAll();
	}, []);

	useEffect(() => {
		if (authUser?.isAdmin) {
			fatchRequestRes();
		}
	}, []);

	const fatchRequestRes = async () => {
		try {
			const res = await axios.get("/restaurant/getPendingRes");
			console.log("fatchRequestRes==>", res.data);
			setReqRestaurant(res.data);
		} catch (err) {
			console.log(err);
		}
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

	const resEditPending = () => {
		try {
			console.log("clickResEditPending");
		} catch (err) {
			console.log(err);
		}
	};

	const resEditPendingBussiTime = async (input) => {
		try {
			console.log("clickResEditPendingBussiTime", input);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ResContext.Provider
			value={{
				reqRestaurant,
				changeStatusRes,
				restaurantAll,
				resEditPending,
				resEditPendingBussiTime,
			}}
		>
			{children}
		</ResContext.Provider>
	);
}
