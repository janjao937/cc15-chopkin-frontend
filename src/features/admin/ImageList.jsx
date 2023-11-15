import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ data }) {
	console.log("data =>", data);

	return (
		<>
			<ImageItem obj={data} />
		</>
	);
}
