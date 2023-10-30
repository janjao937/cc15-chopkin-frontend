import React from "react";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-4 py-5 sticky top-0 z-30 h-[7vh]">
      {/* Logo */}
      <div className="">
        <Link to="/">
          <div>Logo</div>
        </Link>
      </div>

      {/* Login */}
      <div>
        {false ? (
          <>
            <div className="flex gap-4">
              <div className="cursor-pointer">username</div>
              <div className="cursor-pointer text-red-500 font-semibold hover:text-red-300">
                Sign Out
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <MyButton style={`py-1 px-6 rounded-lg`}>Sign In</MyButton>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
