// import './App.css';
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
const socket = io.connect("http://localhost:8888");

const ChatComponent = ({
	user,
	roomId,
	inPutMessage,
	setInputMessage,
	// OnSendMessageHandler,
}) => {
	//#region waiting user and roomId
	const [username, setUsername] = useState(user);
	const [room, setRoom] = useState(roomId);
	// const username = user?.firstName || user?.restaurant || "admin";
	// const room  = roomId;
	//#endregion

	const [showChat, setShowChat] = useState(false);

	const joinOrCreateRoom = () => {
		if (username && room == "") return;
		socket.emit("join_room", room);
		setShowChat(!showChat);
		//if CusOrRes
		//UserCreateRoomByRoomId(roomId)
		//end
	};

	const UserCreateRoomByRoomId = async (roomId) => {
		try {
			//post CreateRoomByUserId({userId})
			console.log("User create Room:" + roomId);
		} catch (error) {
			console.log("UserCreateRoom", error);
		}
	};

	return (
		<div className="">
			{!showChat ? (
				<>
					{/* <h1>Chat</h1> */}
					<div className="flex flex-col ">
						<div className="flex flex-col gap-2 items-center justify-center text-md mb-[100px]">
							<div className="text-primary font-semibold text-lg">
								ROOM-ID :{" "}
							</div>
							{/* <input
							type="text"
							placeholder="name..."
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						/> */}
							{/* <input
								type="text"
								placeholder="Room id..."
								onChange={(e) => setRoom(e.target.value)}
								value={room}
							/> */}
							<div>{room}</div>
						</div>

						{/* <div className=""> */}
						<button
							className="uppercase shadow-lg px-4 py-2 bg-secondary h-[100px] w-[100px] mx-auto hover:bg-secondary/90 text-white hover:text-secondary text-xl rounded-full"
							onClick={joinOrCreateRoom}
						>
							Join Room
						</button>
						{/* </div> */}
					</div>
				</>
			) : (
				<Chat socket={socket} username={username} room={room} />
			)}
		</div>
	);
};

export default ChatComponent;
