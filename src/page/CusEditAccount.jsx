import React, { useState, useRef } from "react";
import useAuth from "../Hooks/use-auth";
import imageBlank from "../assets/blank.png";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function CusEditAccount() {
	const { authUser, uploadProfile } = useAuth();
	// console.log(authUser);

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
	});

	const [file, setFile] = useState(null);
	if (file) console.log(URL.createObjectURL(file));

	const inputEl = useRef(null);

	const handleClickForm = async (e) => {
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
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
			navigate(`/profile/${authUser.id}`);
			window.location.reload();
		}
	};

	// if (file) console.log(URL.createObjectURL(file));
	return (
		<div className="px-72 min-h-[800px] flex flex-col justify-center h-full">
			{loading && <Loading />}
			<div className="border shadow-lg">
				<form
					onSubmit={handleClickForm}
					className=" flex flex-col items-center justify-center gap-4 p-4 min-h-[700px]"
				>
					<div className="flex flex-col items-center justify-center gap-4">
						<div className="w-[300px] h-[300px] rounded-full overflow-hidden border ">
							<img
								src={
									file
										? URL.createObjectURL(file)
										: authUser.profileImg || imageBlank
								}
								alt="profileImage"
								className="w-full h-full object-center"
							/>
						</div>
						<input
							type="file"
							className="bg-white text-primary px-4 py-2"
							ref={inputEl}
							onChange={(e) => {
								if (e.target.files[0]) {
									setFile(e.target.files[0]);
								}
							}}
						/>
						{/* <button
							className="mx-auto border border-primary shadow-md rounded-full  px-6 py-1 text-primary"
							onClick={() => inputEl.current.click()}
						>
							Change Avatar
						</button> */}
						{/* <input type="file" /> */}
					</div>

					<div className="flex gap-4">
						<p className="font-semibold flex items-center">
							First Name :
						</p>
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
							className="border p-3 rounded-lg outline-none w-[400px]"
							placeholder={authUser.firstName}
						/>
					</div>
					<div className="flex gap-4">
						<p className="font-semibold flex items-center">
							Last Name :
						</p>

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
							className="border p-3 rounded-lg outline-none w-[400px]"
							placeholder={authUser.lastName}
						/>
					</div>

					<button
						className="px-4 py-2 h-10 bg-secondary text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-full"
						type="submit"
					>
						UPDATE PROFILE
					</button>
				</form>
			</div>
		</div>
	);
}
