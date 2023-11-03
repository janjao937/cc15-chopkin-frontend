import React from "react";
import useAuth from "../../Hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function AuthenticatedCustomer({ children }) {
	const { authUser } = useAuth();

	if (authUser === null && authUser?.isAdmin && authUser?.restaurantName) {
		return <Navigate to="/login" />;
	}
	return children;
}
