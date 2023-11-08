import React from "react";
import MyBookItem from "./MyBookItem";

export default function MyBookList({ data }) {
	// console.log("orderStatus", data.orderStatus);

	return <>{data.orderStatus === 0 && <MyBookItem obj={data} />}</>;
}
