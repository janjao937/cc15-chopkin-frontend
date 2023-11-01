import React, { useState } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import MyButton from "../../components/MyButton";

export default function CustomerItem({
	obj,
	id,
	firstName,
	lastName,
	email,
	phone,
	profileImage,
}) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="grid grid-cols-12  ">
				<div className="col-span-5 px-4 py-2 text-center border border-gray-400  ">
					{id}
				</div>
				<div className="col-span-3 px-4 py-2 text-center border border-gray-400 ">
					{firstName}
				</div>
				<Link
					to={`/admin/customer/${id}`}
					className="rounded-full col-span-2 text-center justify-items-center py-1  bg-secondary mx-4 my-2 text-white"
				>
					Detail
				</Link>
				<MyButton
					onClick={() => setIsOpen(!isOpen)}
					style={`rounded-full col-span-2 bg-secondary mx-4 my-2`}
				>
					Modify
				</MyButton>

				{/* Modify */}
				<Modal
					title={`CUSTOMER MODIFY`}
					titleStyle={`bg-red-600 text-white`}
					open={isOpen}
					maxWidth={60}
					onClose={() => setIsOpen(false)}
				>
					asdf
				</Modal>
			</div>
		</>
	);
}
