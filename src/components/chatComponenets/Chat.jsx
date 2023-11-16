import React, { useEffect, useState } from "react";
import { ChatComponentOther, ChatComponentMe } from "./ChatBoxComponent";
import { BsFillSendFill } from "react-icons/bs";
import { useRef } from "react";

const Chat = ({ socket, username, room }) => {
	const [inPutMessage, setInputMessage] = useState("");
	const [messageArr, setMessageArr] = useState([]);

	const OnSendMessageHandler = async () => {
		//validate
		if (inPutMessage.trim() === "") return;
		const messageData = {
			room: room,
			author: username,
			message: inPutMessage,
			time:
				new Date(Date.now()).getHours() +
				":" +
				new Date(Date.now()).getMinutes(),
		};
		await socket.emit("send_message", messageData);
		setMessageArr([...messageArr, messageData]);
		setInputMessage("");
	};
	const handleKeyPress = (event) => {
		// look for the `Enter` keyCode
		if (event.keyCode === 13 || event.which === 13) {
			OnSendMessageHandler();
		}
	};

	const messageEl = useRef(null);

	useEffect(() => {
		if (messageEl) {
			messageEl.current.addEventListener("DOMNodeInserted", (event) => {
				const { currentTarget: target } = event;
				target.scroll({ top: target.scrollHeight, behavior: "smooth" });
			});
		}
	}, []);

	useEffect(() => {
		socket.on("recive_message", (data) => {
			console.log(data);
			setMessageArr((e) => [...e, data]);
		});
	}, [socket]);

	return (
		<div className="">
			<div className="flex flex-col px-1">
				<div className="chat-header mb-2">
					{/* <p>Realtime Chat | ROOM_ID:{room}</p> */}
					{/* <div className="text-lg">ROOM_ID:{room}</div> */}
				</div>
				<div
					ref={messageEl}
					className="chat-body flex flex-col gap-2 px-1 mt-4 h-[320px]  overflow-y-auto "
				>
					{messageArr.map((e, index) => {
						return username === e.author ? (
							<ChatComponentMe
								key={index}
								message={e.message}
								author={e.author}
								time={e.time}
							/>
						) : (
							<ChatComponentOther
								key={index}
								message={e.message}
								author={e.author}
								time={e.time}
							/>
						);
					})}
				</div>
			</div>

			<div className="absolute bottom-[-10px] w-full">
				<div className="h-[50px] bg-gray-200 rounded-b-xl flex items-center  gap-2 px-3">
					<input
						onChange={(e) => setInputMessage(e.target.value)}
						type="text"
						placeholder="message..."
						value={inPutMessage}
						className="w-full text-lg px-4 outline-none rounded-full"
						onKeyPress={handleKeyPress}
					/>
					<button
						className="hover:text-secondary"
						onClick={OnSendMessageHandler}
					>
						<BsFillSendFill size={30} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
