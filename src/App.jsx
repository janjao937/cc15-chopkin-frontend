import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Route from "./router/Route";
import useAuth from "./Hooks/use-auth";
import Loading from "./components/Loading";

export default function App() {
	const { initialLoading } = useAuth();
	if (initialLoading) {
		return <Loading />;
	}
	return (
		<>
			<Route />
			<ToastContainer position="top-center" />
		</>
	);
}
