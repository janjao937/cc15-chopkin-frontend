import React from "react";
import { useState } from "react";
import useAuth from "../../Hooks/use-auth";

const arr = [
	{
		room: "room",
		author: "username",
		message: "inputMessage",
		// time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
	},
	{
		room: "room",
		author: "i bae",
		message: "inputMessage",
		// time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
	},
	{
		room: "room",
		author: "username",
		message: "inputMessage",
		// time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
	},
];

export default function Chat() {
	const { authUser } = useAuth();
	console.log("first", authUser);

	return (
		<>
			{arr.map((item, index) => (
				<div key={index}>
					<div className="flex items-center justify-between p-2 ">
						<div>
							<div>{item.author}</div>
							<div>{item.message}</div>
						</div>
						<div>
							<div>{item.author}</div>
							<div>{item.message}</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
