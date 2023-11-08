import React from "react";
import useAuth from "../../Hooks/use-auth.js";

import imageBlank from "../../assets/blank.png";
import AsideMenu from "./AsideMenu";
import Header from "./Header";

export default function Benefits() {
	const { authUser } = useAuth();
	// console.log("authUser", authUser);

	return (
		<div className="flex flex-col m-4">
			<div className="grid grid-cols-12">
				{/* left */}
				<AsideMenu
					profileImg={authUser.profileImg}
					imageBlank={imageBlank}
				/>

				{/* right */}
				<div className="col-span-10 flex flex-col gap-4 mx-4">
					<div className="mb-10">
						{/* detail header */}
						<Header />
					</div>
					<div>
						{/* detail etc. */}
						<div>coming soon</div>
					</div>
				</div>
			</div>
		</div>
	);
}
