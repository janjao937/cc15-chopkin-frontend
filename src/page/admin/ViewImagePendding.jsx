import React, { useEffect } from "react";
import useRes from "../../Hooks/use-res";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import blank from "../../assets/blank.png";
import { toast } from "react-toastify";

export default function ViewImagePage() {
	const { resId } = useParams();

	const {
		getImageResPenddingByResId,
		imageResPenddingByResId,
		updateImage,
		deleteImage,
	} = useRes();
	console.log("imageResPenddingByResId =>", imageResPenddingByResId);

	useEffect(() => {
		getImageResPenddingByResId(resId);
	}, []);

	console.log("resId =>", resId);

	// {
	//     "images":[
	//         {
	//       "id": 18,
	//       "url": "https://res.cloudinary.com/doc5oed8y/image/upload/v1699953792/kfcmh6w3paws6ewyl057.jpg",
	//       "restaurantId": "01f4be85-9684-4f8f-8179-9e554c84873b"
	//     },
	//     {
	//       "id": 19,
	//       "url": "https://res.cloudinary.com/doc5oed8y/image/upload/v1699953794/t7ybrdvar2elzci4x33i.jpg",
	//       "restaurantId": "01f4be85-9684-4f8f-8179-9e554c84873b"
	//     },
	//     {
	//       "id": 20,
	//       "url": "https://res.cloudinary.com/doc5oed8y/image/upload/v1699953796/ael5ywikwujgrhiugots.jpg",
	//       "restaurantId": "01f4be85-9684-4f8f-8179-9e554c84873b"
	//     }
	//   ]
	//   }

	const input = {
		images: imageResPenddingByResId,
	};

	console.log("input", input);

	const handleClickApprove = () => {
		updateImage(resId, input);
		// alert(`Approve Image RestaurantId : ${resId}`);
		toast.success(`Approve Image RestaurantId : ${resId}`);
	};

	const handleClickReject = () => {
		deleteImage(resId);
		// alert(`Reject Image RestaurantId : ${resId}`);
		toast.warning(`Reject Image RestaurantId : ${resId}`);
	};
	return (
		<div className="flex flex-col m-4 gap-4">
			<h1 className="text-center text-2xl font-semibold uppercase underline text-primary px-4 py-2">
				Image Request
			</h1>

			<div className="flex flex-col gap-4 items-center justify-center mb-4 px-4 py-2">
				{imageResPenddingByResId.map((item, index) => (
					<div
						key={index}
						className="w-[600px] h-[300px] overflow-hidden rounded-xl shadow-lg mb-4"
					>
						<img src={item.url || blank} alt="image" />
					</div>
				))}

				<div className="flex gap-2 items-center justify-center">
					<div className="col-span-6 uppercase text-primary">
						RESTAURANT-ID :
					</div>
					<div className="col-span-6">
						{imageResPenddingByResId[0]?.restaurantId}
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center gap-4">
				<Link to="/admin/image">
					<button
						className={`bg-green-500 hover:bg-green-400 px-8 py-2 rounded-full text-white`}
						onClick={handleClickApprove}
					>
						Approve
					</button>
				</Link>
				<Link to="/admin/image">
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
