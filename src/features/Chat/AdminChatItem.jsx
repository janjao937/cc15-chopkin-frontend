import React, { useState } from "react";
import Modal from "../../components/Modal";
import { BsFillSendFill } from "react-icons/bs";
import Chat from "../Chat/Chat";

export default function AdminChatItem({ obj }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="grid grid-cols-12  ">
				<div className="col-span-5 px-4 py-2 text-center border border-gray-400  ">
					{obj.id}
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
				<Modal
					title={`CHAT`}
					titleStyle={`bg-secondary`}
					maxWidth={46}
					open={isOpen}
					onClose={() => setIsOpen(false)}
				>
					{/* <div className="">
						<div className="h-[75%] flex flex-col px-4 py-2 bg-white">
							<Chat data={mockChat} />
						</div>
						<div className="h-[30%] bg-gray-200 rounded-b-xl flex items-center gap-2 px-3">
							<input
								type="text"
								className="w-full h-[100%] px-4 text-sm outline-none rounded-full"
							/>
							<button
								className="hover:text-secondary"
								onClick={() => console.log("close room")}
							>
								<BsFillSendFill size={20} />
							</button>
						</div>
					</div> */}
					<div>
						<div className="h-[450px] px-4 py-2">
							<Chat />
						</div>
						<div className="h-[60px] border border-blue-gray-600 rounded-b-xl flex items-center gap-2 px-3">
							<input
								type="text"
								className="w-full h-[100%] text-lg px-4 outline-none rounded-full"
							/>
							<button
								className="hover:text-secondary"
								onClick={() => console.log("close room")}
							>
								<BsFillSendFill size={30} />
							</button>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
}
