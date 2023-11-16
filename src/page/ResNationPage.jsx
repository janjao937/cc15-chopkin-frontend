import React from "react";
import axios from "../config/axios";
import useRes from "../Hooks/use-res";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dataCuisine } from "../data/dataRes";
import ResNationList from "../features/restaurant/ResNationList";

export default function ResNationPage() {
	const { nationIndex } = useParams();
	// console.log("nationIndex =>", nationIndex);

	const result = dataCuisine.filter((item) => {
		return item.id === +nationIndex;
	});
	// console.log(result[0].resType);

	const [resNation, setResNation] = useState([]);

	useEffect(() => {
		fatchResByNation();
	}, []);

	const fatchResByNation = async () => {
		try {
			const res = await axios.get(
				`restaurant/resByNation/${nationIndex}`
			);
			console.log("fatchResByNation =>", res.data);
			setResNation(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col gap-4 m-4 py-2 px-4 min-h-[83vh]">
			<h1 className="text-center uppercase font-semibold text-4xl">
				{result[0].resType}
			</h1>

			{/* nationList */}

			<div className="grid grid-cols-12 items-center justify-items-center gap-4">
				{resNation.map((item, index) => (
					<div key={index} className=" grid col-span-4">
						<ResNationList data={item} />
					</div>
				))}
			</div>
		</div>
	);
}
