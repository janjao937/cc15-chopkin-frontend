import React from "react";
import { useNavigate, Link } from "react-router-dom";
import PayButton from "../../components/paymentComponents/PayButton";

export default function MyBookItem({ objBooking, myBooking }) {
  console.log("obj =>", objBooking);

  const navigate = useNavigate();

  const payButtonProps = {
    bookingId: objBooking.id,
    text: "Payment",
  };

  return (
    <div className="flex flex-col gap-4 border rounded-xl shadow-lg p-6">
      <div className="text-red-500 font-semibold text-lg">
        Booking ID : {objBooking.id}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-md font-semibold">
          {objBooking.restaurant.restaurantName}
        </div>
        <small className="text-gray-600 ">
          {objBooking.bookingDate} at {objBooking.bookingTime} for{" "}
          {objBooking.totalCustomer + objBooking.totalKid} people
        </small>
      </div>

      <div className="flex self-start gap-3">
        <Link
          to={`/profile/${objBooking.id}/detail`}
          // onClick={() => navigate(`/profile/${objBooking.id}/detail`)}
          className="px-4 py-2 bg-red-700 text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-md"
        >
          Detail
        </Link>
        {objBooking && objBooking?.payment?.paymentStatus === 1 ? undefined : <Link
          to={`/profile/${objBooking.id}/edit-booking`}
          className="px-4 py-2 bg-red-700 text-white cursor-pointer hover:bg-red-300 hover:text-black hover:scale-125 duration-300 ease-in-out border  rounded-md"
        >
          Modify
        </Link>}
        {objBooking && objBooking?.payment?.paymentStatus === 0 ? (
          <PayButton {...payButtonProps}></PayButton>
        ) : objBooking && objBooking?.payment?.paymentStatus === 1 ? (
          <p className="text-green-400 flex items-center font-semibold">Payment completed</p>
        ) : (
          <p className="text-gray-400 flex items-center">Pay at restaurant</p>
        )}
      </div>
    </div>
  );
}
