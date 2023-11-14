import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/use-auth";

export default function LoginWithGoogle() {
	const { registerCustomer, login } = useAuth();

	const googleLogin = useGoogleLogin({
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

				let phone = res.data.sub;
				let pass = res.data.sub;
				let passCon = res.data.sub;
				let email = res.data.email;
				let input = {
					firstName: res.data.given_name,
					lastName: res.data.family_name,
					email: email,
					phone: phone.slice(0, 10),
					password: "Gg" + pass,
					confirmPassword: "Gg" + passCon,
				};

				let input2 = {
					emailOrPhone: email,
					password: "Gg" + res.data.sub,
				};

				// "105813101229632275769"

				// if (
				// 	res.data.email !== login({ emailOrPhone: res.data.email })
				// ) {
				// 	registerCustomer(input);
				// }
				// (await login(input2)) || (await registerCustomer(input));
				// if (res.data.email) {
				registerCustomer(input);
				await login(input2);
				// }
			} catch (err) {
				console.log(err);
			}
		},
	});

	return (
		<>
			<button onClick={() => googleLogin()} className="px-2 py-2">
				<FcGoogle size={30} className="inline-block "></FcGoogle> Sign
				in with Google{" "}
			</button>
		</>
	);
}
