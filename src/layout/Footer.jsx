import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { PiYoutubeLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-[#FFC24B]">
      <footer className=" flex items-center justify-between h-[10vh] px-4">
        <div>
          <h3 className="text-slate-400">
            copyright &copy; Chopkin Enjoy Eating{" "}
            <span className="text-white">|</span> By Group Project
          </h3>
        </div>
        {/* Social */}
        <ul className="flex items-center gap-3">
          <li className="flex justify-center items-center text-slate-500 cursor-pointe w-8 h-8 bg-brown-50 rounded-full">
            <FaFacebookF size={23} />
          </li>
          <li className="flex justify-center items-center text-slate-500 cursor-pointer w-8 h-8 bg-brown-50 rounded-full">
            <FaTwitter size={23} />
          </li>
          <li className="flex justify-center items-center text-slate-500 cursor-pointer w-8 h-8 bg-brown-50 rounded-full">
            <AiFillInstagram size={23} />
          </li>
          <li className="flex justify-center items-center text-slate-500 cursor-pointer w-8 h-8 bg-brown-50 rounded-full">
            <FaLinkedinIn size={23} />
          </li>
          <li className="flex justify-center items-center text-slate-500 cursor-pointer w-8 h-8 bg-brown-50 rounded-full">
            <PiYoutubeLogoFill size={23} />
          </li>
        </ul>
      </footer>
    </div>
  );
}
