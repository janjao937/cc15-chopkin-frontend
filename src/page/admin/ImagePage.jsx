import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput";
import ImageList from "../../features/admin/ImageList";
import useRes from "../../Hooks/use-res";

export default function ImagePage() {
	const { getImageResPendding, imageResPendding } = useRes();
	//
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		getImageResPendding();
	}, []);

	console.log("imageResPendding =>", imageResPendding);

	const itemRestaurant = imageResPendding.map((item) => item.restaurantId);
	console.log("itemRestaurant =>", itemRestaurant);

	const test = imageResPendding.filter(
		(item, index) =>
			item.restaurantId === imageResPendding[index].restaurantId
	);
	console.log("test", test);

	// const mapImg = () => {
	// 	const objRes = {};
	// 	for (let i = 0; i < imageResPendding.length; i++) {
	// 		if (objRes[imageResPendding[i].restaurantId]) {
	// 			objRes[imageResPendding[i].restaurantId].imgs.push(
	// 				imageResPendding[i].url
	// 			);
	// 		} else {
	// 			objRes[imageResPendding[i].restaurantId] = {
	// 				imgs: [],
	// 				resId: imageResPendding[i].restaurantId,
	// 			};
	// 			objRes[imageResPendding[i].restaurantId].imgs = [
	// 				imageResPendding[i].url,
	// 			];
	// 		}
	// 	}

	// 	return objRes;
	// };

	// const mapObjectRes = (b) => {
	// 	for (let i in b) {
	// 		// code block to be executed
	// 		console.log(i);
	// 	}
	// };

	// const filteredRequests = fatchResPendding.filter(
	// 	(x) =>
	// 		x.restaurantName.toLowerCase().includes(searchInput) ||
	// 		x.id.toString().toLowerCase().includes(searchInput)
	// );

	// if (editRequestLoading) return <Loading />;

	// const filter

	return (
		<>
			<div className="flex flex-col gap-4 p-4 mb-10">
				<h1>Edit Request</h1>
				<small className="mb-4">Hi, Welcome back to Admin!</small>

				<div className="mb-4">
					<SearchInput
						placeholder="Search Booking ID or Name"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</div>

				{/* EditPenddingList */}
				<div className="">
					<div className="grid grid-cols-12">
						<h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
							Restaurant Id
						</h1>
						<h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
							Restaurant Name
						</h1>
					</div>
					{/* {mapObjectRes({ hello: "asdasdasd" })} */}
					{imageResPendding.map((item, index) => (
						<div key={index}>
							<ImageList data={item} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
