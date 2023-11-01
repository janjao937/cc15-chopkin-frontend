import React from "react";
import { useParams } from "react-router-dom";

export default function ViewEditingPage() {
	const { restaurantId } = useParams();
	console.log(restaurantId);

	return <div>ViewEditingPage</div>;
}
