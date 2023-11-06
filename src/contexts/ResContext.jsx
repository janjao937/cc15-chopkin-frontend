import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import useAuth from "../Hooks/use-auth";

export const ResContext = createContext();

export default function ResContextProvider({ children }) {
	const { authUser } = useAuth();
	const isRestaurant = authUser?.restaurantName;
	const isCustomer = authUser?.firstName;
	const isAdmin = authUser?.isAdmin;

	const [reqRestaurant, setReqRestaurant] = useState([]);
	const [restaurantAll, setRestaurantAll] = useState([]);
	const [fatchResPendding, setFatchResPendding] = useState([]);

	useEffect(() => {
		fatchResAll();
	}, []);

	useEffect(() => {
		const fatchRequestRes = async () => {
			try {
				const res = await axios.get("/restaurant/getPendingRes");
				console.log("fatchRequestRes==>", res.data);
				setReqRestaurant(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		if (!isRestaurant && !isCustomer) {
			fatchRequestRes();
		}
	}, []);

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

	// admin => change status res 0 => 1
	const changeStatusRes = async (resId) => {
		try {
			const res = await axios.patch(`/restaurant/updateStatus/${resId}`);
			console.log("changeStatusRes=>", res.data);
			setReqRestaurant(reqRestaurant.filter((item) => item.id !== resId));
		} catch (err) {
			console.log(err);
		}
	};

	// admin => delete res or reject newRes
	const deleteRes = async (resId) => {
		try {
			const res = await axios.delete(`/restaurant/delete/${resId}`);
			console.log("deleteRes =>", res.data);
			setReqRestaurant(reqRestaurant.filter((item) => item.id !== resId));
		} catch (err) {
			console.log(err);
		}
	};

	// admin => get res PenddingEdit
	useEffect(() => {
		const fatchPendingEdit = async () => {
			try {
				const res = await axios.get(`/restaurant/getPendingEdit`);
				console.log("fatchPendingEdit =>", res.data);
				setFatchResPendding(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fatchPendingEdit();
	}, []);

	// admin => delete res PenddingEdit
	const deleteResPending = async (redId) => {
		try {
			const res = await axios.delete(`/restaurant/editPending/${redId}`);
			console.log("deleteResPendding =>", res.data);
			setFatchResPendding(
				fatchResPendding.filter((item) => item.id !== redId)
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ResContext.Provider
			value={{
				reqRestaurant,
				changeStatusRes,
				deleteRes,
				restaurantAll,
				resEditPending,
				resEditPendingBussiTime,
				fatchResPendding,
				deleteResPending,
			}}
		>
			{children}
		</ResContext.Provider>
	);
}
