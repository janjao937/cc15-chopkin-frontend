import React from "react";
import { useParams } from "react-router-dom";
import useRes from "../../Hooks/use-res";
import blank from "../../assets/blank.png";
import MyButton from "../../components/MyButton";
import { nationIndex, categoryIndex, districtIndex } from "../../data/dataRes";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ViewEditingPage() {
	const { resId } = useParams();
	console.log("resId =>", resId);

	const { fatchResPendding, deleteResPending } = useRes();

	const filterReq = fatchResPendding.find(
		(item) => item.restaurantId === resId
	);
	console.log("filterReq =>", filterReq);
	console.log("filterReqId =>", filterReq.id);

	const nation = nationIndex.find(
		(item) => item.id === filterReq.districtIndex
	);
	// console.log("nation", nation.title);

	const category = categoryIndex.find(
		(item) => item.id === filterReq.categoryIndex
	);
	// console.log("category", category.title);

	const district = districtIndex.find(
		(item, index) => index === filterReq.districtIndex
	);
	// console.log("district", district);

	const handleClickApprove = () => {};

	const handleClickReject = () => {
		deleteResPending(filterReq.id);
		alert(`Reject Edit Restaurant : ${resId}`);
	};

	return (
		<div className="flex flex-col m-4 gap-4">
			<h1 className="text-center text-2xl font-semibold">Edit Requrst</h1>

			<div className="flex flex-col gap-4 px-4 py-2">
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6">PROFILE-IMG :</div>
					<div className="col-span-6 w-[180px] h-[180px] rounded-full overflow-hidden">
						<img
							src={filterReq.profileImg || blank}
							alt="profilImg"
							className="w-full h-full"
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6">RESTAURANT-NAME :</div>
					<div className="col-span-6">{filterReq.restaurantName}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6">PRICE :</div>
					<div className="col-span-6">{filterReq.price}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6">LATITUDE :</div>
					<div className="col-span-6">{filterReq.latitude}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6">LONGITUDE :</div>
					<div className="col-span-6">{filterReq.longitude}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6">DISTRICT :</div>
					<div className="col-span-6">{district}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6">CATEGORY :</div>
					<div className="col-span-6">{category.title}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center mb-4">
					<div className="col-span-6">NATION :</div>
					<div className="col-span-6">{nation.title}</div>
				</div>

				{/* BusinessTime */}
				<div className="grid grid-cols-12 items-center justify-items-center border-b-2 px-4 py-1">
					<div className="col-span-4">DAY</div>
					<div className="col-span-4">OPEN-TIME</div>
					<div className="col-span-4">CLOSED-TIME</div>
				</div>
				{filterReq.tempBusinessTimes.map((item, index) => (
					<div
						className="grid grid-cols-12 items-center justify-items-center px-4 py-1"
						key={index}
					>
						<div className="col-span-4">{item.day}</div>
						<div className="col-span-4">{item.openTime}</div>
						<div className="col-span-4">{item.closedTime}</div>
					</div>
				))}
			</div>

			<div className="flex items-center justify-center gap-4">
				{/* <MyButton
					style={`bg-green-500 hover:bg-green-400 px-6 rounded-full`}
					onClick={handleClickApprove}
				>
					Approve
				</MyButton>
				
				<MyButton
					style={`bg-red-500 hover:bg-red-400 px-8 rounded-full`}
					onClick={handleClickReject}
				>
					Reject
				</MyButton> */}

				<Link to="/admin/edit">
					<button
						className={`bg-green-500 hover:bg-green-400 px-8 py-2 rounded-full text-white`}
						onClick={handleClickApprove}
					>
						Approve
					</button>
				</Link>
				<Link to="/admin/edit">
					<button
						className={`bg-red-500 hover:bg-red-400 px-10 py-2 rounded-full text-white`}
						onClick={handleClickReject}
					>
						Reject
					</button>
				</Link>
			</div>
		</div>
	);
}
