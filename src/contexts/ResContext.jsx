import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import useAuth from "../Hooks/use-auth";

export const ResContext = createContext();

export default function ResContextProvider({ children }) {
  const { authUser } = useAuth();
  const isRestaurant = authUser?.restaurantName;
  const isCustomer = authUser?.firstName;
  const isAdmin = authUser?.isAdmin;
  const [reqRestaurant, setReqRestaurant] = useState([]);
  const [restaurantAll, setRestaurantAll] = useState([]);
  const [fatchResPendding, setFatchResPendding] = useState([]);
  const [fatchPackagePendding, setFatchPackcagePendding] = useState([]);
  const [getBookingAll, setGetBookingAll] = useState([]);

  useEffect(() => {
    fatchResAll();
  }, []);

  const [business, setBusiness] = useState([]);

  useEffect(() => {
    fatchResAll();
  }, []);
  useEffect(() => {
    const fatchRequestRes = async () => {
      try {
        const res = await axios.get("/restaurant/getPendingRes");
        console.log("fatchRequestRes==>", res.data);
        setReqRestaurant(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (!isRestaurant && !isCustomer) {
      fatchRequestRes();
    }
  }, []);

  const fatchResAll = async () => {
    try {
      const res = await axios.get("/restaurant/all");
      console.log("fatchResAll=>", res.data);
      setRestaurantAll(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const resEditPending = () => {
    try {
      console.log("clickResEditPending");
    } catch (err) {
      console.log(err);
    }
  };

  const resEditPendingBussiTime = async (input) => {
    try {
      console.log("clickResEditPendingBussiTime", input);
      setBusiness(input);
    } catch (err) {
      console.log(err);
    }
  };
  // admin => change status res 0 => 1
  const changeStatusRes = async (resId) => {
    try {
      const res = await axios.patch(`/restaurant/updateStatus/${resId}`);
      console.log("changeStatusRes=>", res.data);
      setReqRestaurant(reqRestaurant.filter((item) => item.id !== resId));
    } catch (err) {
      console.log(err);
    }
  };

  // admin => delete res or reject newRes
  const deleteRes = async (resId) => {
    try {
      const res = await axios.delete(`/restaurant/delete/${resId}`);
      console.log("deleteRes =>", res.data);
      setReqRestaurant(reqRestaurant.filter((item) => item.id !== resId));
    } catch (err) {
      console.log(err);
    }
  };

  // admin => get res PenddingEdit
  useEffect(() => {
    const fatchPendingEdit = async () => {
      try {
        const res = await axios.get(`/restaurant/getPendingEdit`);
        console.log("fatchPendingEdit =>", res.data);
        setFatchResPendding(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fatchPendingEdit();
  }, []);

  // admin => update res PenddingEdit
  const updateResPending = async (redId, input) => {
    try {
      const res = await axios.patch(`/restaurant/mergeResInfo/${redId}`, input);

      console.log("redId =>", redId);

      setFatchResPendding(
        fatchResPendding.filter((item) => item.restaurantId !== redId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  // admin => delete res PenddingEdit
  const deleteResPending = async (redId) => {
    try {
      const res = await axios.delete(`/restaurant/editPending/${redId}`);
      // console.log("deleteResPendding =>", res.data);
      console.log("redId =>", redId);
      setFatchResPendding(fatchResPendding.filter((item) => item.id !== redId));
    } catch (err) {
      console.log(err);
    }
  };

  // admin => package getEditPending
  useEffect(() => {
    const fatchPackagePending = async () => {
      try {
        const res = await axios.get(`/package/getEditPending`);
        console.log("fatchPackagePending =>", res.data);
        setFatchPackcagePendding([...res.data]);
      } catch (err) {
        console.log(err);
      }
    };
    fatchPackagePending();
  }, []);

  // admin => package createPackage
  const createPackage = async (resId, input) => {
    try {
      const res = await axios.post(`/package/create/${resId}`, input);
      console.log("createPackage =>", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // admin => delete packagePendding
  const deletePackagePendding = async (pendingId) => {
    try {
      const res = await axios.delete(`/package/delete/${pendingId}`);
      console.log("deletePackagePendding =>", res.data);

      setFatchPackcagePendding((p) => {
        console.log(p);
        console.log(pendingId);

        return [...p.filter((item) => item.id !== +pendingId)];
      });
      // console.log("test111", test111);
    } catch (err) {
      console.log(err);
    }
  };

  // ####################### Booking
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

  useEffect(() => {
    const ownerMyBooking = async () => {
      try {
        const res = await axios.get(`/booking/own`);
        console.log("ownBooking =>", res.data.allBooking);
      } catch (err) {
        console.log(err);
      }
    };
    ownerMyBooking();
  }, []);

  return (
    <ResContext.Provider
      value={{
        reqRestaurant,
        changeStatusRes,
        deleteRes,
        restaurantAll,
        resEditPending,
        resEditPendingBussiTime,
        fatchResPendding,
        deleteResPending,
        updateResPending,
        fatchPackagePendding,
        createPackage,
        deletePackagePendding,
        getBookingAll,
        business,
      }}
    >
      {children}
    </ResContext.Provider>
  );
}
