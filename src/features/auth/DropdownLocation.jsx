import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import InputLocation from "./InputLocation";
import InputErrorMessage from "./InputErrorMessage";

export default function DropdownLocation({ input, setInput, error }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: +e.target.value });
	};

	return (
		<>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`flex justify-between w-full bg-transparent text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-3 rounded-md ${
					isOpen ? "border-2 border-gray-900" : "border-blue-gray-200"
				}`}
			>
				<span>RESTAURANT LOCATED</span>
				<HiChevronDown />
			</div>

			<div>
				<InputLocation
					isOpen={isOpen}
					value={input.latitude}
					placeholder="Latitude"
					onChange={handleChangeInput}
					name="latitude"
					hasError={error.latitude}
				/>
				{error.latitude && (
					<InputErrorMessage message={error.latitude} />
				)}
			</div>

			<div>
				<InputLocation
					isOpen={isOpen}
					value={input.longitude}
					placeholder="Longitude"
					onChange={handleChangeInput}
					name="longitude"
					hasError={error.longitude}
				/>
				{error.longitude && (
					<InputErrorMessage message={error.longitude} />
				)}
			</div>
		</>
	);
}
