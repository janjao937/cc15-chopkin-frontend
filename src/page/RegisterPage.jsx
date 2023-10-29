import React from "react";
import useAuth from "../Hooks/use-auth";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage() {
	// const {} = useAuth();

	return (
		<div className="h-screen flex items-center justify-center border border-red-800">
			<div></div>
			<RegisterForm />
		</div>
	);
}
