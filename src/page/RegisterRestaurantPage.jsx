import React from "react";
import RegisterRestaurantForm from "../features/auth/RegisterRestaurantForm";

export default function RegisterRestaurantPage() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="h-1/2 bg-cover bg-center relative bg-[url('/src/assets/bg1.jpg')]"></div>
      <div className="flex-1 flex items-center justify-center absolute inset-0">
        <RegisterRestaurantForm />
      </div>
    </div>
  );
}
