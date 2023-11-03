import React from "react";
import useAuth from "../../Hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function AuthenticatedAdmin({ children }) {
	const { authUser } = useAuth();

	if (!authUser?.isAdmin) {
		return <Navigate to="/" />;
	}

	return children;
}
