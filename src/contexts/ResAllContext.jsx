import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const ResAllContext = createContext();

export default function ResAllContextProvider({ children }) {
  // const { reviewId } = useParams();
  const [getRestaurantAll, setGetRestaurantAll] = useState([]);


  useEffect(() => {
    const fetchResAll = async () => {
      try {
        const res = await axios.get("/restaurant/all");
        console.log("fetchResAll=>", res.data);
        setGetRestaurantAll(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchResAll();
  }, []);

  

  return (
    <ResAllContext.Provider
      value={{
        getRestaurantAll,
      }}
    >
      {children}
    </ResAllContext.Provider>
  );
}
