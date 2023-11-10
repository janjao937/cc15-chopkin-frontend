import React from "react";
import Time from "../../components/Time";

export default function ResBussiTime({
	resById,
	// inputBusiTime,
	// setInputBusiTime,
	inputMon,
	setInputMon,
	inputTue,
	setInputTue,
	inputWed,
	setInputWed,
	inputThu,
	setInputThu,
	inputFri,
	setInputFri,
	inputSat,
	setInputSat,
	inputSun,
	setInputSun,
}) {
	// console.log("resById=>", resById);

	let day = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const findDay = (indexDay) => {
		if (indexDay) {
			return day[indexDay - 1];
		}
		return indexDay;
	};

	return (
		<div className="px-4 py-2 my-4 grid grid-cols-12 gap-4">
			<div className="col-span-6 px-4 py-2">
				{/* Table Current */}
				<h1 className="text-center text-xl mb-2 font-semibold">
					Current
				</h1>
				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center bg-gray-600 text-white font-semibold">
					<div className="col-span-4">Day</div>
					<div className="col-span-4">Open Time</div>
					<div className="col-span-4">Closed Time</div>
				</div>
				{resById.BusinessTimes?.length === 0 ? (
					<>
						<div className="grid grid-cols-12 px-4 items-center justify-items-center">
							<div className="col-span-4">{`-`}</div>
							<div className="col-span-4">{`-`}</div>
							<div className="col-span-4">{`-`}</div>
						</div>
					</>
				) : (
					<>
						{resById.BusinessTimes?.map((item, index) => (
							<div
								className="grid grid-cols-12 px-4 py-1 items-center justify-items-center "
								key={index}
							>
								<div className="col-span-4">
									{item.day && <>{findDay(item.day)}</>}
								</div>
								<div className="col-span-4">
									{item.openTime}
								</div>
								<div className="col-span-4">
									{item.closedTime}
								</div>
							</div>
						))}
					</>
				)}
			</div>

			{/* Table Current */}
			<div className="col-span-6 px-4 py-2">
				<h1 className="text-center text-xl mb-2 font-semibold">
					Update
				</h1>
				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center bg-gray-600 text-white font-semibold">
					<div className="col-span-4">Day</div>
					<div className="col-span-4">Open Time</div>
					<div className="col-span-4">Closed Time</div>
				</div>

				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center ">
					<div className="col-span-4">Monday</div>
					<div className="col-span-4">
						<Time
							inputModify={inputMon}
							setInputModify={setInputMon}
							inputKey={`openTime`}
						/>
					</div>
					<div className="col-span-4">
						<Time
							inputModify={inputMon}
							setInputModify={setInputMon}
							inputKey={`closedTime`}
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center ">
					<div className="col-span-4">Tuesday</div>
					<div className="col-span-4">
						<Time
							inputModify={inputTue}
							setInputModify={setInputTue}
							inputKey={`openTime`}
						/>
					</div>
					<div className="col-span-4">
						<Time
							inputModify={inputTue}
							setInputModify={setInputTue}
							inputKey={`closedTime`}
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center ">
					<div className="col-span-4">Wednesday</div>
					<div className="col-span-4">
						<Time
							inputModify={inputWed}
							setInputModify={setInputWed}
							inputKey={`openTime`}
						/>
					</div>
					<div className="col-span-4">
						<Time
							inputModify={inputWed}
							setInputModify={setInputWed}
							inputKey={`closedTime`}
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center ">
					<div className="col-span-4">Thursday</div>
					<div className="col-span-4">
						<Time
							inputModify={inputThu}
							setInputModify={setInputThu}
							inputKey={`openTime`}
						/>
					</div>
					<div className="col-span-4">
						<Time
							inputModify={inputThu}
							setInputModify={setInputThu}
							inputKey={`closedTime`}
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center ">
					<div className="col-span-4">Friday</div>
					<div className="col-span-4">
						<Time
							inputModify={inputFri}
							setInputModify={setInputFri}
							inputKey={`openTime`}
						/>
					</div>
					<div className="col-span-4">
						<Time
							inputModify={inputFri}
							setInputModify={setInputFri}
							inputKey={`closedTime`}
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center ">
					<div className="col-span-4">Saturday</div>
					<div className="col-span-4">
						<Time
							inputModify={inputSat}
							setInputModify={setInputSat}
							inputKey={`openTime`}
						/>
					</div>
					<div className="col-span-4">
						<Time
							inputModify={inputSat}
							setInputModify={setInputSat}
							inputKey={`closedTime`}
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 px-4 py-2 items-center justify-items-center ">
					<div className="col-span-4">Sunday</div>
					<div className="col-span-4">
						<Time
							inputModify={inputSun}
							setInputModify={setInputSun}
							inputKey={`openTime`}
						/>
					</div>
					<div className="col-span-4">
						<Time
							inputModify={inputSun}
							setInputModify={setInputSun}
							inputKey={`closedTime`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
