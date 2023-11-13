import React from "react";
import useAuth from "../../Hooks/use-auth.js";

import imageBlank from "../../assets/blank.png";
import AsideMenu from "./AsideMenu";
import Header from "./Header";
import useRes from "../../Hooks/use-res.js";
import { useParams } from "react-router-dom";
import MyBookList from "./MyBookList.jsx";
import BookHistoryList from "./BookHistoryList.jsx";
import useBooking from "../../Hooks/use-booking.js";

import { mockBooking } from "../../data/mock-booking.jsx";
import { useEffect } from "react";

export default function Reservation() {
  const { userId } = useParams();
  // console.log("userId =>", userId);

  const { authUser } = useAuth();
  // console.log("authUser", authUser);

	// const { getBookingAll } = useRes();

	const { getBookingAll } = useBooking();

	const myBooking = getBookingAll.filter(
		(item) => item.customerId === userId
	);
	console.log("myBooking =>", myBooking);


  return (
    <div className="flex flex-col m-4">
      <div className="grid grid-cols-12">
        {/* left */}
        <AsideMenu profileImg={authUser.profileImg} imageBlank={imageBlank} />

        {/* right */}
        <div className="col-span-10 flex flex-col gap-4 mx-4">
          <div className="mb-10">
            {/* ### Header ### */}
            <Header />
          </div>

          {/* Mock */}
          <div>
            {mockBooking.map((item, index) => (
              <div key={index} className="p-4 shadow-md">
                {item.id}
				{/* <MyBookList data={item} /> */}
				<button className="p-2 bg-blue-400 text-white rounded-md">payment</button>
              </div>
            ))}
          </div>

          {/* Detail .. */}
          <div>
            {/* detail etc. */}
            {myBooking.length > 0 ? (
              <div className="flex flex-col gap-4 px-4 py-2">
                <div className="text-lg font-semibold">
                  Upcoming Reservation
                </div>
                <div className="grid grid-cols-12 gap-4">
                  {myBooking.map((item, index) => (
                    <div
                      key={index}
                      className="col-span-12 md:col-span-6 lg:col-span-4"
                    >
                      <MyBookList data={item} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div>coming soon</div>
              </>
            )}
          </div>
          <div>
            {/* detail History */}
            {myBooking.length > 0 ? (
              <div className="flex flex-col gap-4 px-4 py-2">
                <div className="text-lg font-semibold">Booking History</div>
                <div className="grid grid-cols-12 gap-4">
                  {myBooking.map((item, index) => (
                    <div
                      key={index}
                      className="col-span-12 md:col-span-6 lg:col-span-4"
                    >
                      <BookHistoryList data={item} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div>Not have MyBooking</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
