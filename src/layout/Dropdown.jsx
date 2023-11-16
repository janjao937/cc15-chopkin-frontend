import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { TbLogout } from "react-icons/tb";
import useAuth from "../Hooks/use-auth";

export default function Dropdown() {
	const { authUser, logout } = useAuth();

	const customerName = authUser?.firstName;
	const restaurantName = authUser?.restaurantName;
	const adminName = authUser?.isAdmin;

	const [isOpen, setIsOpen] = useState(false);

	const dropdownEl = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!dropdownEl.current?.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<div className="relative text-black" ref={dropdownEl}>
			<div
				className="cursor-pointer hover:text-orange-500"
				onClick={() => setIsOpen(!isOpen)}
			>
				{customerName}
				{restaurantName}
				{adminName && "Admin"}
			</div>

      {isOpen && (
        <div className="absolute w-[14rem] bg-white right-[-0.2rem] translate-y-2 border rounded-xl shadow-xl">
          <div className="flex flex-col items-end justify-center gap-1 p-3">
            {customerName ? (
              <>
                <Link to={`/profile/${authUser.id}`}>
                  <div className="cursor-pointer hover:text-red-500 text-black">
                    My Profile
                  </div>
                </Link>
              </>
            ) : (
              <>
                {restaurantName ? (
                  <>
                    <Link to={`/restaurant/${authUser.id}`}>
                      <div className="cursor-pointer hover:text-red-500 text-black">
                        My Profile
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    {adminName && (
                      <>
                        <Link to="/admin">
                          <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-black">
                            DashBoard
                          </div>
                        </Link>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>

					<hr className="m-2 border" />

          {customerName ? (
            <>
              <Link to={`/profile/${authUser.id}/edit-account`}>
                <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-black p-2">
                  Setting
                </div>
              </Link>
            </>
          ) : (
            <>
              {restaurantName ? (
                <>
                  <Link to={`/restaurant/${authUser.id}/edit`}>
                    <div className="text-end mb-1 cursor-pointer hover:text-red-500 transition text-black p-2" >
                      Setting
                    </div>
                  </Link>
                  <Link to={`/restaurant/${authUser.id}/edit/addImage`}>
                    <div className="text-end mb-1 cursor-pointer hover:text-red-500 transition text-black p-2">
                      Add Image
                    </div>
                  </Link>
                  <Link to={`/restaurant/${authUser.id}/edit/edit-package`}>
                    <div className="text-end mb-1 cursor-pointer hover:text-red-500 transition text-black p-2">
                      Edit Package
                    </div>
                  </Link>
                  <Link to={`/restaurant/${authUser.id}/approve-booking`}>
                    <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-black p-2">
                      Approve Booking
                    </div>
                  </Link>
                </>
              ) : (
                ""
              )}
            </>
          )}

          <div
            onClick={logout}
            className="flex justify-end items-center gap-4 cursor-pointer hover:bg-red-500 hover:transition rounded-xl hover:text-white"
          >
            <div className="font-semibold p-2">Log Out</div>
            <div className=" h-9 aspect-square rounded-full flex items-center justify-center">
              <TbLogout size={20}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
