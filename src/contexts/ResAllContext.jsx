import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const ResAllContext = createContext();

export default function ResAllContextProvider({ children }) {
  // const { reviewId } = useParams();
  const [getRestaurantAll, setGetRestaurantAll] = useState([]);
  const [scoreReview, setScoreReview] = useState([]);
  const [scoreAvg, setScoreAvg] = useState([]);

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

  const fetchScore = async (reviewId) => {
    try {
      const res = await axios.get(`/review/${reviewId}`);
      console.log("Review ==>", res.data);
      setScoreReview(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchScoreAvg = async () => {
    try {
      const res = await axios.get(`/restaurant/review-score`);
      console.log("scoreAvg ==>", res.data);
      setScoreAvg(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ResAllContext.Provider
      value={{
        getRestaurantAll,
        fetchScore,
        scoreReview,
        fetchScoreAvg,
        scoreAvg,
      }}
    >
      {children}
    </ResAllContext.Provider>
  );
}
