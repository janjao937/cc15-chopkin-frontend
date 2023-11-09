
import { createContext } from "react";
import { useState } from "react";
import axios from "../config/axios";

export const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const [numberOfAdult, setNumberOfAdult] = useState(0);
  const [numberOfKids, setNumberOfKids] = useState(0);
  const [haveKids, setHaveKids] = useState(false);
  const [allPackage,setAllPackage] = useState([]);

  const customerCreateBooking = async(booking) => {
    try {
      const res = await axios.post("http://localhost:8888/booking/create",booking);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8888/package/getAll/${resId}`)
  //     .then((res) => setAllPackage(res.data))
  //     .catch((e) => console.log(e));
  // }, []);

  const handleGetNumberOfAdult = (value) => {
    setNumberOfAdult(value);
  };

  const handleHaveKid = () => {
    setHaveKids(!haveKids);
    setNumberOfKids(0);
  };

  const handleAddKid = () => {
    setNumberOfKids(numberOfKids + 1);
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
        customerCreateBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
