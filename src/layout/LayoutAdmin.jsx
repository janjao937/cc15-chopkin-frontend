import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AsideAdmin from "./AsideAdmin";

export default function LayoutAdmin() {
	return (
		<div className="">
			<Header />
			<div className="grid grid-cols-12">
				<div className="col-span-2">
					<AsideAdmin />
				</div>
				<div className="col-span-10">
					<Outlet />
				</div>
			</div>

			<Footer />
		</div>
	);
}
