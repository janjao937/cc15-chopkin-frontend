import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

export default function LoginWithGoogle({ FnLogin, input, setInput }) {
	const [profile, setProfile] = useState([]);

	const onFailure = (res) => {
		console.log("failed", res);
	};

	const logOut = () => {
		setProfile(null);
	};

	const login = useGoogleLogin({
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

				FnLogin({
					emailOrPhone: res.data.email,
					password: prompt("password "),
				});
			} catch (err) {
				console.log(err);
			}
		},
	});

	return (
		<>
			{/* <GoogleLogin
				onSuccess={(credentialResponse) => {
					console.log(credentialResponse);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
			/> */}

			<button onClick={() => login()} className="px-2 py-2">
				<FcGoogle size={30} className="inline-block "></FcGoogle> Sign
				in with Google{" "}
			</button>
			{/* <div>
				<h2>React Google Login</h2>
				<br />
				{profile ? (
					<div>
						<img src={profile.imageUrl} alt="" />
						<h3>User</h3>
						<p>Name: {profile.name}</p>
						<p>Email: {profile.email}</p>
						<br />
					</div>
				) : (
					<GoogleLogin
						clientId={clientId}
						buttonText="Sign in with Google"
						onSuccess={onSuccess}
						onFailure={onFailure}
						cookiePolicy={"single_host_origin"}
						isSignedIn={true}
					/>
				)}
			</div> */}
		</>
	);
}
