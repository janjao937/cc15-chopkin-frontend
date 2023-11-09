import React from "react";
import Menu from "../customer/Menu";

export default function AsideMenu({ profileImg, imageBlank }) {
	return (
		<aside className="col-span-2 flex flex-col gap-4">
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="w-[120px] h-[120px] rounded-full overflow-hidden border ">
					<img
						src={profileImg || imageBlank}
						alt=""
						className="w-full h-full object-fill"
					/>
				</div>
				<div>Edit</div>
			</div>

			<Menu />
		</aside>
	);
}
