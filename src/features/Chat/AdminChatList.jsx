import React from "react";
import AdminChatItem from "./AdminChatItem";

export default function AdminChatList({ data }) {
	return (
		<>
			<AdminChatItem obj={data} />
		</>
	);
}
