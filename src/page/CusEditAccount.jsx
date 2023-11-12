import React, { useState, useRef } from "react";
import useAuth from "../Hooks/use-auth";
import imageBlank from "../assets/blank.png";
import Loading from "../components/Loading";

export default function CusEditAccount() {
	const { authUser, uploadProfile } = useAuth();
	// console.log(authUser);

	const [loading, setLoading] = useState(false);

	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
	});

	const [file, setFile] = useState(null);
	if (file) console.log(URL.createObjectURL(file));

	const inputEl = useRef(null);

	const handleClickUpLoadProfile = async (e) => {
		try {
			e.preventDefault();
			const formData = new FormData();
			if (file) {
				formData.append("profileImg", file);
			}
			if (input.firstName) {
				formData.append("firstName", input.firstName);
			}
			if (input.lastName) {
				formData.append("lastName", input.lastName);
			}
			setLoading(true);
			await uploadProfile(formData);
			window.location.reload();
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <Loading />}
			<form
				onSubmit={handleClickUpLoadProfile}
				className=" flex flex-col items-center justify-center gap-4 p-4"
			>
				<div className="flex flex-col items-center justify-center gap-4">
					<div className="w-[120px] h-[120px] rounded-full overflow-hidden border ">
						<img
							src={authUser.profileImg || imageBlank}
							alt=""
							className="w-full h-full object-center"
						/>
					</div>
					<input
						type="file"
						// className="hidden"
						ref={inputEl}
						onChange={(e) => {
							if (e.target.files[0]) {
								setFile(e.target.files[0]);
							}
						}}
					/>
					{/* <input type="file" /> */}
				</div>

				<div className="flex gap-4">
					<div>First Name :</div>
					<input
						name="firstName"
						value={input.firstName}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
						type="text"
						className="border px-4 rounded-lg outline-none"
						placeholder={authUser.firstName}
					/>
				</div>
				<div className="flex gap-4">
					<div>Last Name :</div>

					<input
						name="lastName"
						value={input.lastName}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
						type="text"
						className="border px-4 rounded-lg outline-none"
						placeholder={authUser.lastName}
					/>
				</div>

				<button
					className="bg-secondary text-white px-4 py-2 mx-auto rounded-full hover:bg-secondary/70 hover:text-black"
					type="submit"
				>
					UPDATE PROFILE
				</button>
			</form>
		</>
	);
}
