import React from "react";
import SearchInput from "../../components/SearchInput";
import { mockBooking } from "../../data/mock-booking";
// console.log(mockBooking);
import BookingList from "../../features/admin/BookingList";
import useRes from "../../Hooks/use-res";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../config/axios";

export default function BookingPage() {
  const { getBookingAll, setGetBookingAll } = useRes();
  // console.log("getBookingAll =>", getBookingAll);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fatchBookingAll = async () => {
      try {
        const res = await axios.get(`/booking/all`);
        console.log("fatchBookgingAll =>", res.data.allBooking);
        setGetBookingAll(res.data.allBooking);
      } catch (err) {
        console.log(err);
      }
    };
    fatchBookingAll();
  }, []);

  const filteredBookings = getBookingAll.filter((x) => {
    return (
      x.id.toLowerCase().includes(searchInput) ||
      x.customer.firstName.toLowerCase().includes(searchInput)
    );
  });

  return (
    <>
      <div className="flex flex-col gap-4 p-4 mb-10">
        <h1>All Booking</h1>
        <small className="mb-4">Hi, Welcome back to Admin!</small>

        <div className="mb-4">
          <SearchInput
            placeholder="Search Booking ID or Name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* BookingList */}
        <div className="">
          <div className="grid grid-cols-12">
            <h1 className="col-span-5 px-4 py-2 text-center border border-gray-400  bg-gray-300 text-red-500 font-semibold ">
              Booking ID
            </h1>
            <h1 className="col-span-3 px-4 py-2 text-center border border-gray-400 bg-gray-300 text-red-500 font-semibold ">
              username
            </h1>
          </div>
          {filteredBookings.length > 0
            ? filteredBookings.map((item) => (
                <div key={item.id}>
                  <BookingList data={item} />
                </div>
              ))
            : getBookingAll.map((item) => (
                <div key={item.id}>
                  <BookingList data={item} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
