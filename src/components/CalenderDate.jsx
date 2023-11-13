import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { string } from "joi";

export default function CalenderDate({
	inputModify,
	setInputModify,
	// defaultValue = dayjs(),
}) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker", "DatePicker"]}>
				{/* <DatePicker
					label="Uncontrolled picker"
					defaultValue={dayjs("2022-04-17")}
				/> */}
				<div className="w-[180px] h-[60px]">
					<DatePicker
						// defaultValue={dayjs(defaultValue)}
						label="Calender Date"
						name="bookingDate"
						value={inputModify.name}
						onChange={(e) =>
							setInputModify({
								...inputModify,
								bookingDate: e.format("DD-MM-YYYY"),
							})
						}
						className="w-full h-full"
					/>
				</div>
			</DemoContainer>
		</LocalizationProvider>
	);
}
