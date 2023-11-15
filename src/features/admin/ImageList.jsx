import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ data }) {
	console.log("imageResPendding =>", data);

	return (
		<>
			<ImageItem
				obj={data}
				resId={data[0]}
				resName={data[1].restaurantName}
			/>
		</>
	);
}
