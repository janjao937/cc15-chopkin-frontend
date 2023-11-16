import React from "react";
import LoginForm from "../features/auth/LoginForm";
import { Link } from "react-router-dom";
import LoginAnimation from "../icon/LoginAnimation.json";
import Lottie from "lottie-react";

export default function LoginPage() {
  return (
    <div className="h-screen flex relative">
      {/* <div className="h-1/2 bg-cover bg-center relative bg-[url('/src/assets/bg1.jpg')]"></div> */}
    
        <Lottie animationData={LoginAnimation}></Lottie>
   
      <Link to="/register">
        <button className="absolute top-5 right-6 py-2 px-4 border text-xs font-semibold z-10">
          SIGN UP
        </button>
      </Link>
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
