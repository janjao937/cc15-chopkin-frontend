import React from "react";
import imageBlank from "../assets/blank.png";

export default function Avatar({ src }) {
	return (
		<div className="w-[120px] h-[120px] rounded-full overflow-hidden border ">
			<img
				src={src || imageBlank}
				alt=""
				className="w-full h-full object-center"
			/>
		</div>
	);
}
