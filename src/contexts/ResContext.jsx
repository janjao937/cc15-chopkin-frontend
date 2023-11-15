import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const ResContext = createContext();

export default function ResContextProvider({ children }) {
	const [reqRestaurant, setReqRestaurant] = useState([]);
	const [restaurantAll, setRestaurantAll] = useState([]);
	const [fatchResPendding, setFatchResPendding] = useState([]);
	const [fatchPackagePendding, setFatchPackcagePendding] = useState([]);
	const [getBookingAll, setGetBookingAll] = useState([]);
	const [homeLoading, setHomeLoading] = useState(false);
	const [allCustomer, setAllCustomer] = useState([]);
	const [imageResPendding, setImageResPendding] = useState([]);
	const [imageResPenddingByResId, setImageResPenddingByResId] = useState([]);

	const [business, setBusiness] = useState([]);

	const [selected, setSelected] = useState(null);
	const [input, setInput] = useState({
		restaurantName: "",
		ownerFirstName: "",
		ownerLastName: "",
		email: "",
		phone: "",
		categoryIndex: "",
		nationIndex: "",
		districtIndex: "",
		price: "",
		position: {},
	});

	useEffect(() => {
		const fatchResAll = async () => {
			try {
				setHomeLoading(true);
				const res = await axios.get("/restaurant/all");
				console.log("fatchResAll=>", res.data);
				setRestaurantAll(res.data);
				setHomeLoading(false);
			} catch (err) {
				console.log(err);
			} finally {
				setHomeLoading(false);
			}
		};
		fatchResAll();
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

	const resEditPendingBussiTime = async (input) => {
		try {
			console.log("clickResEditPendingBussiTime", input);
			setBusiness(input);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchAllCus = async () => {
		try {
			const res = await axios.get("/customer/getAll");
			console.log("fetchAllCus =>", res.data);
			setAllCustomer(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const fatchPendingEdit = async () => {
		try {
			const res = await axios.get(`/restaurant/getPendingEdit`);
			console.log("fatchPendingEdit =>", res.data);
			setFatchResPendding(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const getImageResPendding = async () => {
		try {
			const res = await axios.get(`/restaurant/getResImgPending`);
			// const res2 = JSON.parse(res);
			console.log("getResImgPending =>", JSON.parse(res.data));
			const resParse = JSON.parse(res.data);

			setImageResPendding(resParse);
		} catch (err) {
			console.log(err);
		}
	};

	const getImageResPenddingByResId = async (redId) => {
		try {
			const res = await axios.get(
				`/restaurant/getImgPendingByResId/${redId}`
			);
			console.log("getImgPendingByResId=>", res.data);
			setImageResPenddingByResId(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const updateImage = async (resId, input) => {
		try {
			const res = await axios.post(
				`/restaurant/mergeResImgWithTemp`,
				input
			);
			setImageResPendding(
				imageResPendding.filter((item) => item[0] !== resId)
			);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteImage = async (resId) => {
		try {
			const res = await axios.delete(
				`/restaurant/deleteAllTempImg/${resId}`
			);

			setImageResPendding(
				imageResPendding.filter((item) => item[0] !== resId)
			);
		} catch (err) {
			console.log(err);
		}
	};

	// admin => get res PenddingEdit
	// console.log("AUTH =>>>>", authUser);

	// admin => update res PenddingEdit
	const updateResPending = async (redId, input) => {
		try {
			const res = await axios.patch(
				`/restaurant/mergeResInfo/${redId}`,
				input
			);
			// console.log("redId =>", redId);
			setFatchResPendding(
				fatchResPendding.filter((item) => item.restaurantId !== redId)
			);
		} catch (err) {
			console.log(err);
		}
	};

	// admin => delete res PenddingEdit
	const deleteResPending = async (redId) => {
		try {
			const res = await axios.delete(`/restaurant/editPending/${redId}`);
			// console.log("deleteResPendding =>", res.data);
			// console.log("redId =>", redId);
			setFatchResPendding(
				fatchResPendding.filter((item) => item.id !== redId)
			);
		} catch (err) {
			console.log(err);
		}
	};

	// admin => getPackagePending
	const getPackagePendding = async () => {
		try {
			const res = await axios.get(`/package/getEditPending`);
			console.log("fatchPackagePending =>", res.data);
			setFatchPackcagePendding(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	// admin => package createPackage
	const createPackage = async (resId, input) => {
		try {
			const res = await axios.post(`/package/create/${resId}`, input);
			console.log("createPackage =>", res.data);
		} catch (err) {
			console.log(err);
		}
	};

	// admin => delete packagePendding
	const deletePackagePendding = async (pendingId) => {
		try {
			const res = await axios.delete(`/package/delete/${pendingId}`);
			console.log("deletePackagePendding =>", res.data);

			setFatchPackcagePendding((p) => {
				console.log(p);
				console.log(pendingId);

				return [...p.filter((item) => item.id !== +pendingId)];
			});
			// console.log("test111", test111);
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
				resEditPendingBussiTime,
				fatchPendingEdit,
				fatchResPendding,
				deleteResPending,
				updateResPending,
				getPackagePendding,
				fatchPackagePendding,
				createPackage,
				deletePackagePendding,
				getBookingAll,
				business,
				homeLoading,
				setFatchPackcagePendding,
				setGetBookingAll,
				fetchAllCus,
				allCustomer,
				fatchRequestRes,
				input,
				setInput,
				selected,
				setSelected,
				getImageResPendding,
				imageResPendding,
				updateImage,
				getImageResPenddingByResId,
				imageResPenddingByResId,
				deleteImage,
			}}
		>
			{children}
		</ResContext.Provider>
	);
}
