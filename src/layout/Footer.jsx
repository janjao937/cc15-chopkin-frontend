import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiYoutubeLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-[#FFC24B]">
      <footer className=" flex items-center justify-between h-[10vh] px-4 max-w-[78vw] mx-auto">
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
