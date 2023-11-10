import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

export default function RegisterWithGoogle({ FnRegister }) {
	const register = useGoogleLogin({
		onSuccess: async (response) => {
			try {
				const res = await axios.get(
					`https://www.googleapis.com/oauth2/v3/userinfo`,
					{
						headers: {
							Authorization: `Bearer ${response.access_token}`,
						},
					}
				);
				console.log(res);
				// setInput({
				// 	emailOrPhone: res.data.email,
				// 	password: "",
				// });
				// FnLogin({
				// 	emailOrPhone: res.data.email,
				// 	password: prompt("password "),
				// });
				FnRegister({
					firstName: res.data.given_name,
					lastName: res.data.family_name,
					email: res.data.email,
					profileImg: res.data.picture,
					phone: prompt("phone "),
					password: prompt("password "),
					confirmPassword: prompt("confirmPassword "),
				});
			} catch (err) {
				console.log(err);
			}
		},
	});
	return (
		<>
			<button onClick={() => register()} className="px-2 py-2">
				<FcGoogle size={30} className="inline-block "></FcGoogle> Sign
				up with Google{" "}
			</button>
		</>
	);
}
