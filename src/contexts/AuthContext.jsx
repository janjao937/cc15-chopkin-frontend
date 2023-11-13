import React, { createContext, useState, useEffect } from "react";
import axios from "../config/axios";
import {
	addAccessToken,
	getAccessToken,
	removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
	const [initialLoading, setInitialLoading] = useState(true);
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		if (getAccessToken()) {
			axios
				.get("/auth/user")
				.then((res) => {
					setAuthUser(res.data.user);
					console.log("fatchUser==>", res.data);
				})
				.catch((err) => console.log(err))
				.finally(() => setInitialLoading(false));
		} else {
			setInitialLoading(false);
		}
	}, []);

	const registerCustomer = async (registerInputObject) => {
		const res = await axios.post(
			"/auth/register/customer",
			registerInputObject
		);
		// console.log("customer==>", res.data);

		setAuthUser(res.data.customer);
		addAccessToken(res.data.accessToken);
		// setAuthUser(res.data.user);
	};

	const registerRestaurant = async (registerInputObject) => {
		const res = await axios.post(
			"/auth/register/restaurant",
			registerInputObject
		);
		// console.log("restaurant==>", res.data);

		setAuthUser(res.data.restaurant);
		addAccessToken(res.data.accessToken);
		window.location.reload();
		// setAuthUser(res.data.user);
	};

	const login = async (loginInputObject) => {
		const res = await axios.post("/auth/login", loginInputObject);
		if (res.data.admin) setAuthUser(res.data.admin);
		if (res.data.customer) setAuthUser(res.data.customer);
		if (res.data.restaurant) setAuthUser(res.data.restaurant);
		addAccessToken(res.data.accessToken);
	};

	const logout = () => {
		removeAccessToken();
		setAuthUser(null);
	};

	const uploadProfile = async (input) => {
		const res = await axios.patch(`/customer/edit-profile`, input);
		console.log("upload=>", res.data);

		// setAuthUser({ ...authUser, ...res.data.updateData });
	};

	return (
		<AuthContext.Provider
			value={{
				initialLoading,
				registerCustomer,
				registerRestaurant,
				login,
				authUser,
				logout,
				uploadProfile,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
