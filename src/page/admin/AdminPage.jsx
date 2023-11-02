import React from "react";

export default function AdminPage() {
	return (
		<div className="flex flex-col gap-2 p-4">
			<h1>DashBoard</h1>
			<small className="mb-4">Hi, Welcome back to Admin!</small>

			<div>
				<div className="text-2xl mb-4">Total New Restaurant</div>
				<div className="flex gap-4">
					<div className="border bg-white shadow-lg flex flex-col items-center gap-4 p-4 w-[200px]">
						<div className="text-gray-500 font-semibold">TODAY</div>
						<div className="text-6xl font-semibold text-blue-800">
							16
						</div>
						<small className="text-gray-400">16 orders today</small>
					</div>
					<div className="border bg-white shadow-lg flex flex-col items-center gap-4 p-4 w-[200px]">
						<div className="text-gray-500 font-semibold">
							THIS WEEK
						</div>
						<div className="text-6xl font-semibold text-blue-800">
							16
						</div>
						<small className="text-gray-400">16 orders week</small>
					</div>
				</div>
			</div>
		</div>
	);
}
