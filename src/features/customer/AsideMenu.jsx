import React from "react";
import Menu from "../customer/Menu";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function AsideMenu({ profileImg, imageBlank }) {
	console.log("profileImg =>", profileImg);

	const { userId } = useParams();

	const navigate = useNavigate();

	return (
		<aside className="col-span-2 flex flex-col gap-4">
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="w-[120px] h-[120px] rounded-full overflow-hidden border ">
					<img
						src={profileImg || imageBlank}
						alt=""
						className="w-full h-full object-center"
					/>
				</div>
				<button
					onClick={() => navigate(`/profile/${userId}/edit-account`)}
				>
					Edit
				</button>
			</div>

			<Menu />
		</aside>
	);
}
