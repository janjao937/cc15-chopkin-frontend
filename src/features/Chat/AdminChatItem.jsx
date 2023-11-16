import React, { useState } from "react";
import Modal from "../../components/Modal";
import { BsFillSendFill } from "react-icons/bs";
import Chat from "../Chat/Chat";
import ChatComponent from "../../components/chatComponenets/ChatComponent";
import useAuth from "../../Hooks/use-auth";
import { useEffect } from "react";

export default function AdminChatItem({ obj }) {
	// console.log("obj=>", obj);
	const [isOpen, setIsOpen] = useState(false);

	const { authUser, deleteRoom } = useAuth();
	const objAdmin = authUser;

	const handleCloseRoom = () => {
		// console.log("close room");
		deleteRoom(obj.roomId);
	};

	return (
		<>
			<div className="grid grid-cols-12  ">
				<div className="col-span-5 px-4 py-2 text-center border border-gray-400  ">
					{obj.roomId}
				</div>
				<div className="col-span-3 px-4 py-2 text-center border border-gray-400 ">
					{obj.name}
				</div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="rounded-full col-span-2 text-center justify-items-center py-1  bg-secondary mx-4 my-2 text-white"
				>
					CHAT
				</button>

				<button
					onClick={handleCloseRoom}
					className="rounded-full col-span-2 text-center justify-items-center py-1  bg-secondary mx-4 my-2 text-white"
				>
					CLOSE ROOM
				</button>
				<Modal
					title={`CHAT`}
					titleStyle={`bg-secondary`}
					maxWidth={46}
					open={isOpen}
					onClose={() => setIsOpen(false)}
				>
					<div>
						<div className="h-[450px] py-2 relative">
							{/* <Chat /> */}
							<ChatComponent user={`Admin`} roomId={obj.roomId} />
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}
