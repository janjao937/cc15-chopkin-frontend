import React from "react";
import blank from "../../assets/blank.png";
import { BsPersonCircle, BsTelephone } from "react-icons/bs";
import { MdCardMembership } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { SlDiamond } from "react-icons/sl";
import { useParams } from "react-router-dom";
import useRes from "../../Hooks/use-res";

export default function DetailCustomerPage() {
	const { customerId } = useParams();
	// console.log("customerId ==>", customerId);

	const { allCustomer } = useRes();
	// console.log("aullCus =>", allCustomer);

	const customerById = allCustomer.find((item) => item.id === customerId);
	// console.log("customerById =>", customerById);

	return (
		<div className="p-4 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<div className="w-[200px] h-[200px] rounded-full overflow-hidden">
					<img
						src={customerById.profileImg || blank}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
			</div>

			{/* Detail CustomerId */}
			<div className="flex flex-col w-[100%] gap-2 p-4 ">
				<h1 className="text-xl mb-4 font-semibold">
					Customer ID:
					<span className="text-red-600"> {customerById?.id}</span>
				</h1>
				<div className="flex flex-col gap-4 mb-10 w-[60%]">
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<BsPersonCircle
								size={20}
								className="text-red-600"
							/>
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Name
						</div>
						<div className="col-span-6">
							{customerById?.firstName}
						</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<AiOutlineMail size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Email
						</div>
						<div className="col-span-6">{customerById?.email}</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<BsTelephone size={20} className="text-red-600" />
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							Phone
						</div>
						<div className="col-span-6">{customerById?.phone}</div>
					</div>
					<div className="grid grid-cols-12 items-center">
						<div className="col-span-1">
							<MdCardMembership
								size={20}
								className="text-red-600"
							/>
						</div>
						<div className="col-span-5 text-red-600 font-semibold">
							MemberPoint
						</div>
						<div className="col-span-6">
							{customerById.memberPoint}
						</div>
					</div>
				</div>

				{/* <div className="grid grid-cols-12 items-cente gap-4 mb-20">
					<button
						className={`text-red-600 border border-red-600 px-4 py-1 rounded-full col-span-6 hover:bg-red-500 hover:text-white`}
					>
						MODIFY BOOKING
					</button>
					<button
						className={`text-red-600 border border-red-600 px-4 py-1 rounded-full col-span-6 hover:bg-red-500 hover:text-white`}
					>
						SHARE BOOKING
					</button>
				</div> */}
				<div className="flex items-center justify-center gap-4 mb-4">
					<div>
						<SlDiamond size={20} className="text-red-600" />
					</div>
					<div className="text-sm">
						You will earn xx points for this booking
					</div>
				</div>

				<div className="flex flex-col justify-center items-center text-red-600 mb-6">
					<div>If you like tax invoice for you order,</div>
					<div>
						please contack the restaurant directly with you order Id
					</div>
				</div>
			</div>
		</div>
	);
}
