import React from "react";
import NewRestaurantList from "../../features/admin/NewRestaurantList";
import useRes from "../../Hooks/use-res";
import axios from "../../config/axios";
import { useEffect } from "react";
import useAuth from "../../Hooks/use-auth";

export default function NewRestaurantPage() {
  const { reqRestaurant, setReqRestaurant, fatchRequestRes } = useRes();
  const { authUser } = useAuth();

  useEffect(() => {
    fatchRequestRes();
  }, []);

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1>New Restaurant</h1>
      <small className="mb-4">Hi, Welcome back to Admin!</small>

      <div className="flex flex-col gap-4 items-center justify-center px-4 py-2">
        {reqRestaurant.map((item, index) => (
          <div key={index}>
            <NewRestaurantList data={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
