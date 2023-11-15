import React from "react";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/use-auth";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";

export default function Header() {
  const { authUser, logout } = useAuth();
  // console.log(authUser);

  const handleClickLogout = () => {
    logout();
  };
  return (
    <header className="flex items-center justify-between px-4 py-5 sticky top-0 z-30 h-[7vh] max-w-[78vw] mx-auto">
      {/* Logo */}
      <div className="">
        <Link to="/">
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden">
            <img src={logo} alt="logo" className="object-cover" />
          </div>
        </Link>
      </div>
      <div>
        {authUser ? (
          <>
            <div className="flex gap-4">
              {/* <div className="cursor-pointer">
								{authUser.firstName ||
									authUser.restaurantName ||
									(authUser.isAdmin && "Admin")}
							</div> */}
              <Dropdown />
              <div
                onClick={handleClickLogout}
                className="cursor-pointer text-red-500 font-semibold hover:text-red-300"
              >
                Sign Out
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <MyButton style={`py-1 px-6 rounded-lg bg-primary`}>
                Sign In
              </MyButton>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
