import React from "react";
import BookHistoryItem from "./BookHistoryItem";

export default function BookHistoryList({ data }) {
	return <>{data.orderStatus === 1 && <BookHistoryItem obj={data} />}</>;
}
