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
        <div className="absolute w-[12rem] bg-gray-500/90 right-[-6.2rem] translate-y-2 border rounded-xl shadow-xl p-4">
          <div className="flex flex-col items-end justify-center gap-1">
            {customerName ? (
              <>
                <Link to={`/profile/${authUser.id}`}>
                  <div className="cursor-pointer hover:text-red-500 text-white">
                    My Profile
                  </div>
                </Link>
              </>
            ) : (
              <>
                {restaurantName ? (
                  <>
                    <Link to={`/restaurant/${authUser.id}`}>
                      <div className="cursor-pointer hover:text-red-500 text-white">
                        My Profile
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    {adminName && (
                      <>
                        <Link to="/admin">
                          <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-white">
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
              <Link to="/account">
                <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-white">
                  Setting
                </div>
              </Link>
            </>
          ) : (
            <>
              {restaurantName ? (
                <>
                  <Link to={`/restaurant/${authUser.id}/edit`}>
                    <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-white">
                      Setting
                    </div>
                  </Link>
                  <Link to={`/restaurant/${authUser.id}/edit/edit-package`}>
                    <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-white">
                      Edit Package
                    </div>
                  </Link>
                  <Link to={`/restaurant/${authUser.id}/approve-booking`}>
                    <div className="text-end mb-1 cursor-pointer hover:text-red-500 text-white">
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
            className="flex justify-end items-center gap-4 cursor-pointer hover:text-red-500 rounded-xl"
          >
            <div className="font-semibold text-sm text-white">Log Out</div>
            <div className="bg-gray-300 h-9 aspect-square rounded-full flex items-center justify-center">
              <TbLogout />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
