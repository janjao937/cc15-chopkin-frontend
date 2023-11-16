import React from "react";

import { BsPersonCircle, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import useAuth from "../../Hooks/use-auth";
import MemberPoint from "./MemberPoint";
import { useParams } from "react-router-dom";
import useBooking from "../../Hooks/use-booking";

export default function Header({}) {
  const { authUser } = useAuth();
  // console.log("authUser =>", authUser);

  const { userId } = useParams();

  const { getBookingAll } = useBooking();

  const myBooking = getBookingAll.filter((item) => item.customerId === userId);

  return (
    <div className="grid grid-cols-12">
      {/* left */}
      <div className="col-span-8">
        <div>
          <h1 className="text-lg font-semibold mb-4">
            Hello, {authUser.firstName}! Are you feeling{" "}
            <span className="text-red-400">hungry</span> today?
          </h1>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-7">
              <div className="col-span-1 text-red-400">
                <BsPersonCircle size={20} />
              </div>
              <div className="col-span-2 text-red-400">name</div>
              <div className="col-span-2">{authUser.firstName}</div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-1 text-red-400">
                <AiOutlineMail size={20} />
              </div>
              <div className="col-span-2 text-red-400">Email</div>
              <div className="col-span-2">{authUser.email}</div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-1 text-red-400">
                <BsTelephone size={20} />
              </div>
              <div className="col-span-2 text-red-400">Phone</div>
              <div className="col-span-2">{authUser.phone}</div>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="col-span-4">
        <MemberPoint
          authUser={authUser}
          memberPoint={authUser.memberPoint}
          myBooking={myBooking}
        />
      </div>
    </div>
  );
}
