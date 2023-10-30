import RegisterInput from "./RegisterInput";
import { useState } from "react";
import { registerSchema } from "../../validation/auth-validator";
import InputErrorMessage from "./InputErrorMessage";
import MyButton from "../../components/MyButton";

export default function RegisterForm() {
	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
	});

	const [checkbox, setCheckbox] = useState(false);
	const [error, setError] = useState({});

	const validateRegister = (input) => {
		const { error } = registerSchema.validate(input, { abortEarly: false });

		if (error) {
			const result = error.details.reduce((acc, el) => {
				const { message, path } = el;
				acc[path[0]] = message;
				return acc;
			}, {});
			return result;
		}
	};

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const validationError = validateRegister(input);
		if (validationError) {
			return setError(validationError);
		}
		setError({});

		// register(input).catch((err) => console.log(err));
	};
	return (
		<>
			<form
				onSubmit={handleOnSubmit}
				className="p-10 flex flex-col gap-4 border rounded-md shadow-lg"
			>
				<h1 className="text-center text-xl font-semibold">Sign Up</h1>
				<div>
					<div>
						<RegisterInput
							value={input.firstName}
							onChange={handleChangeInput}
							name="firstName"
							placeholder="FIRST NAME"
							hasError={error.firstName}
						/>
					</div>
					{error.firstName && (
						<InputErrorMessage message={error.firstName} />
					)}
					<div>
						<RegisterInput
							value={input.lastName}
							onChange={handleChangeInput}
							name="lastName"
							placeholder="LAST NAME"
							hasError={error.lastName}
						/>
					</div>
					{error.lastName && (
						<InputErrorMessage message={error.lastName} />
					)}
					<div>
						<RegisterInput
							value={input.email}
							onChange={handleChangeInput}
							name="email"
							placeholder="johndoe@example.com"
							hasError={error.email}
						/>
					</div>
					{error.email && <InputErrorMessage message={error.email} />}
					<div>
						<RegisterInput
							value={input.phone}
							onChange={handleChangeInput}
							name="phone"
							placeholder="Phone Number"
							hasError={error.phone}
						/>
					</div>
					{error.phone && <InputErrorMessage message={error.phone} />}
					<div>
						<RegisterInput
							value={input.password}
							onChange={handleChangeInput}
							name="password"
							placeholder="Password"
							type="password"
							hasError={error.password}
						/>
					</div>
					{error.password && (
						<InputErrorMessage message={error.password} />
					)}
					<div>
						<RegisterInput
							value={input.confirmPassword}
							onChange={handleChangeInput}
							name="confirmPassword"
							placeholder="Confirm-Password"
							type="password"
							hasError={error.confirmPassword}
						/>
					</div>
					{error.confirmPassword && (
						<InputErrorMessage message={error.confirmPassword} />
					)}
				</div>

				<div className="flex gap-2">
					<input
						type="checkbox"
						value={checkbox}
						onChange={() => setCheckbox(!checkbox)}
					/>
					<small className="underline text-[10px]">
						I agree to the Terms of Service and Privacy Policy.
					</small>
				</div>
				{checkbox ? (
					<>
						<MyButton type={"submit"} style={`py-2`}>
							CREATE AN ACCOUNT
						</MyButton>
					</>
				) : (
					<>
						<div className="inline-block text-center bg-gray-600 px-4 py-2 rounded-lg text-white shadow-sm ">
							CREATE AN ACCOUNT
						</div>
					</>
				)}
			</form>
		</>
	);
}
