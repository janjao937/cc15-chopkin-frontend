import React from "react";
import useAuth from "../../Hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function AuthenticatedRestaurant({ children }) {
	const { authUser } = useAuth();
	if (!authUser?.restaurantName) {
		return <Navigate to="/" />;
	}
	return children;
}
