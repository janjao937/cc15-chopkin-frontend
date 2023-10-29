import React, { createContext, useState, useEffect } from "react";
import axion from "../config/axios";
import {
	addAccessToken,
	getAccessToken,
	removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
	const [initialLoading, setInitialLoading] = useState(true);

	useEffect(() => {
		if (getAccessToken()) {
		} else {
			setInitialLoading(false);
		}
	}, []);
	return (
		<AuthContext.Provider value={{ initialLoading }}>
			{children}
		</AuthContext.Provider>
	);
}
