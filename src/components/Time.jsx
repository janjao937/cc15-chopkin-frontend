import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function Time({ inputModify, setInputModify }) {
	// const [value, setValue] = useState(dayjs("2022-04-17T15:30"));

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["TimePicker"]}>
				<div className="w-[180px] h-[60px]">
					<TimePicker
						label="HH:MM AM/PM"
						name="bookingTime"
						value={inputModify.name}
						onChange={(e) =>
							setInputModify({
								...inputModify,
								bookingTime: e.format("HH:mm"),
							})
						}
						className="w-full h-full"
					/>
				</div>
			</DemoContainer>
		</LocalizationProvider>
	);
}
