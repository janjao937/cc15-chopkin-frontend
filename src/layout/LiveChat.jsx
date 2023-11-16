import React, { useState } from "react";
import { BsFillChatDotsFill, BsFillSendFill } from "react-icons/bs";
import useAuth from "../Hooks/use-auth";
import Chat from "../features/Chat/Chat";
import ChatComponent from "../components/chatComponenets/ChatComponent";

const mockChat = [
	{
		room: 1,
		author: "Cus1",
		message: "Cus Message",
		time: "09:00 AM",
	},
	{
		room: 1,
		author: "Admin",
		message: "Admin Message",
		time: "09:00 AM",
	},
];

export default function LiveChat() {
	const { authUser, createRoom, deleteRoom } = useAuth();
	console.log("isMe =>", authUser);
	const isMe = authUser;

	// console.log(isMe?.id, isMe?.firstName);

	const [isOpenChat, setIsOpenChat] = useState(false);

	const input = {
		roomId: isMe?.id,
		name: isMe?.firstName || isMe?.ownerFirstName,
	};

	const handleOpenChat = () => {
		setIsOpenChat(!isOpenChat);
		createRoom(input);
		console.log("Open chat Room");
	};

	const handleCloseChat = () => {
		setIsOpenChat(false);
		deleteRoom(isMe?.id);
	};

	return (
		<>
			{authUser && (
				<div className="z-10 bottom-3 right-3 fixed">
					<div className="">
						{isOpenChat ? (
							<div className="absolute shadow-xl rounded-xl flex items-center justify-center w-[350px] h-[460px] right-0 bottom-0 z-99">
								<div className="relative right-0 bottom-0 w-full h-full">
									<div className="bg-secondary text-secondary font-semibold text-md w-full rounded-t-xl px-4 py-2 flex justify-between">
										<p>Admin</p>
										<button
											className="px-2 "
											onClick={handleCloseChat}
										>
											X
										</button>
									</div>
									{/* box chat */}

									<div className="h-[90%] flex flex-col py-2 bg-white">
										{/* <Chat data={mockChat} /> */}
										<ChatComponent
											user={input.name}
											roomId={input.roomId}
										/>
									</div>
									<div className="h-[75%] flex flex-col py-2 bg-white">
										{/* <Chat data={mockChat} /> */}
										{/* <input
											type="text"
											className="w-full h-[60%] px-4 text-sm outline-none rounded-full"
										/>
										<button>
											<BsFillSendFill size={20} />
										</button> */}
									</div>
									{/* <div className="h-[15%] bg-gray-200 rounded-b-xl flex items-center gap-2 px-3">
										<input
											type="text"
											className="w-full h-[60%] px-4 text-sm outline-none rounded-full"
										/>
										<button
											className="hover:text-secondary"
											onClick={() =>
												console.log("close room")
											}
										>
											<BsFillSendFill size={20} />
										</button>
									</div> */}
								</div>
							</div>
						) : (
							<div
								className={`relative text-white w-[50px] h-[50px] p-4 rounded-full bg-secondary flex items-center justify-center `}
							>
								<button
									onClick={handleOpenChat}
									className="absolute cursor-pointer right-0 bottom-0 flex items-center justify-center w-full h-full"
								>
									{/* <div className="w-full h-full"> */}
									<BsFillChatDotsFill
										size={30}
										className=""
									/>
									{/* </div> */}
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}
