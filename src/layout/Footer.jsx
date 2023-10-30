import React from "react";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
	return (
		<footer className="bg-[#FFC24B] flex items-center justify-between px-4 py-8">
			<div>
				<h3 className="text-slate-400">
					copyright &copy; Chopkin Enjoy Eating{" "}
					<span className="text-white">|</span> By Group Project
				</h3>
			</div>
			{/* Social */}
			<ul className="flex items-center gap-2">
				<li className="text-slate-500 cursor-pointer">
					<AiFillFacebook size={20} />
				</li>
				<li className="text-slate-500 cursor-pointer">
					<AiFillTwitterSquare size={20} />
				</li>
				<li className="text-slate-500 cursor-pointer">
					<AiFillInstagram size={20} />
				</li>
				<li className="text-slate-500 cursor-pointer">
					<AiFillLinkedin size={20} />
				</li>
				<li className="text-slate-500 cursor-pointer">
					<AiFillYoutube size={20} />
				</li>
			</ul>
		</footer>
	);
}
