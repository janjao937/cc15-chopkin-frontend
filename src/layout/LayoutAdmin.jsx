import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AsideAdmin from "./AsideAdmin";

export default function LayoutAdmin() {
	return (
		<>
			<Header />
			<div className="max-w-[1440px] mx-auto min-h-[83vh]">
				<div className="grid grid-cols-12 auto-cols-max">
					<div className="col-span-2">
						<AsideAdmin />
					</div>
					<div className="col-span-10">
						<Outlet />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
