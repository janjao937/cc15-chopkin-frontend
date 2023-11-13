import { createContext } from "react";
import { useState } from "react";
import axios from "../config/axios";
import { useEffect } from "react";

export const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const [numberOfAdult, setNumberOfAdult] = useState(0);
  const [numberOfKids, setNumberOfKids] = useState(0);
  const [haveKids, setHaveKids] = useState(false);
  const [allPackage, setAllPackage] = useState([]);

  const handleResetBookingValues = () => {
    setNumberOfKids(0);
    setNumberOfAdult(0);
    // Reset other state variables as needed...
  };

  const [getBookingAll, setGetBookingAll] = useState([]);

  const customerCreateBooking = async (booking) => {
    try {
      const res = await axios.post(
        "http://localhost:8888/booking/create",
        booking
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookingAll();
  }, []);

  const fetchBookingAll = async () => {
    try {
      const res = await axios.get(`booking/all`);
      console.log("fetchBookingAll =>", res.data.allBooking);
      setGetBookingAll(res.data.allBooking);
    } catch (err) {
      console.log(err);
    }
  };

  const editBooking = async (bookingId, input) => {
    try {
      const res = await axios.patch(`booking/${bookingId}/edit`, input);
      console.log("editBooking =>", res);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBooking = async (bookingId) => {
    try {
      const res = await axios.delete(`booking/delete/${bookingId}`);
      // console.log("bookingId ++++=>", bookingId);
      setGetBookingAll(getBookingAll.filter((item) => item.id !== bookingId));
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetNumberOfAdult = (value) => {
    setNumberOfAdult(value);
  };

  const handleRemoveKid = () => {
    if (numberOfKids > 0) {
      setNumberOfKids(numberOfKids - 1);
    }
  };

  // console.log(`Adult===>`, numberOfAdult);
  // console.log(`Kids====>`, numberOfKids);

  return (
    <BookingContext.Provider
      value={{
        handleGetNumberOfAdult,
        handleHaveKid,
        handleAddKid,
        handleRemoveKid,
        numberOfAdult,
        numberOfKids,
        haveKids,
        allPackage,
        customerCreateBooking,
        getBookingAll,
        editBooking,
        deleteBooking,
        handleResetBookingValues,
		setHaveKids,
		setAllPackage

      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
