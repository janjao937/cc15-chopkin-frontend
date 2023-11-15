import React from "react";
import { useParams } from "react-router-dom";
import useRes from "../../Hooks/use-res";
import blank from "../../assets/blank.png";
import { nationIndex, categoryIndex, districtIndex } from "../../data/dataRes";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ViewEditingPage() {
	const { resId } = useParams();
	// console.log("resId =>", resId);

	const {
		fatchPendingEdit,
		fatchResPendding,
		updateResPending,
		deleteResPending,
	} = useRes();

	useEffect(() => {
		fatchPendingEdit();
	}, []);

	const filterReq = fatchResPendding.find(
		(item) => item.restaurantId === resId
	);
	console.log("filterReq =>", filterReq);
	// console.log("filterReqId =>", filterReq);

	const nation = nationIndex.find(
		(item) => item.id === filterReq?.nationIndex
	);
	// console.log("nation", nation?.title);

	const category = categoryIndex.find(
		(item) => item.id === filterReq?.categoryIndex
	);
	// console.log("category", category?.title);

	const district = districtIndex.find(
		(item, index) => index === filterReq?.districtIndex
	);
	// console.log("district", district);

	// console.log("tempBusinessTimes ===>", filterReq?.tempBusinessTimes);
	const busi = filterReq?.tempBusinessTimes;
	const newBusinessTime = busi?.map((item) => {
		delete item.id;
		delete item.restaurantPendingEditId;
		item.restaurantId = resId;
		return item;
	});
	// console.log("newBusiTime =>", newBusinessTime);

	const input = {
		restaurantName: filterReq?.restaurantName,
		price: filterReq?.price,
		categoryIndex: filterReq?.categoryIndex,
		districtIndex: filterReq?.districtIndex,
		nationIndex: filterReq?.nationIndex,
		latitude: filterReq?.latitude,
		longitude: filterReq?.longitude,
		profileImg: filterReq?.profileImg,
		businessTime: JSON.stringify(newBusinessTime),
	};

	console.log("input =>", input);

	const handleClickApprove = () => {
		updateResPending(resId, input);
		alert(`Approve Edit Restaurant : ${resId}`);
		deleteResPending(filterReq.id);
	};

	const handleClickReject = () => {
		deleteResPending(filterReq.id);
		alert(`Reject Edit Restaurant : ${resId}`);
	};

	return (
		<div className="flex flex-col m-4 gap-4">
			<h1 className="text-center text-2xl font-semibold uppercase underline text-primary">
				Edit Requrst
			</h1>

			<div className="flex flex-col gap-4 px-4 py-2 mb-4">
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6 uppercase text-primary">
						PROFILE-IMG :
					</div>
					<div className="col-span-6 w-[180px] h-[180px] rounded-full overflow-hidden">
						<img
							src={filterReq?.profileImg || blank}
							alt="profilImg"
							className="w-full h-full"
						/>
					</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6 uppercase text-primary">
						RESTAURANT-NAME :
					</div>
					<div className="col-span-6">
						{filterReq?.restaurantName}
					</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6 uppercase text-primary">
						PRICE :
					</div>
					<div className="col-span-6">{filterReq?.price}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6 uppercase text-primary">
						LATITUDE :
					</div>
					<div className="col-span-6">{filterReq?.latitude}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6 uppercase text-primary">
						LONGITUDE :
					</div>
					<div className="col-span-6">{filterReq?.longitude}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6 uppercase text-primary">
						DISTRICT :
					</div>
					<div className="col-span-6">{district}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center">
					<div className="col-span-6 uppercase text-primary">
						CATEGORY :
					</div>
					<div className="col-span-6">{category?.title}</div>
				</div>
				<div className="grid grid-cols-12 items-center justify-items-center mb-4">
					<div className="col-span-6 uppercase text-primary">
						NATION :
					</div>
					<div className="col-span-6">{nation?.title}</div>
				</div>

				{/* BusinessTime */}
				<div className="grid grid-cols-12 items-center justify-items-center border-b-2 px-4 py-1">
					<div className="col-span-4 uppercase text-primary">DAY</div>
					<div className="col-span-4 uppercase text-primary">
						OPEN-TIME
					</div>
					<div className="col-span-4 uppercase text-primary">
						CLOSED-TIME
					</div>
				</div>
				{filterReq?.tempBusinessTimes?.map((item, index) => (
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

			{/* RestaurantImage */}
			<div className="text-center font-semibold uppercase text-primary">
				RESTAURANT-IMAGE
			</div>
			<div className="flex items-center justify-evenly gap-4 ">
				{filterReq?.tempRestaurantImages?.map((item, index) => (
					<div key={index} className="w-[200px] h-[200px]">
						<img
							src={item.url || blank}
							alt={`resImage ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>

			<div className="flex items-center justify-center gap-4">
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
