import React from "react";
import useAuth from "../Hooks/use-auth";
import RegisterForm from "../features/auth/RegisterForm";
import { Link } from "react-router-dom";
import LogoAnimation from "../icon/LogoAnimation.json";
import Lottie from "lottie-react";

export default function RegisterPage() {
  // const {} = useAuth();

  return (
    <div className="h-screen flex flex-col relative">
  
      <div className="overflow-hidden">
      <Lottie animationData={LogoAnimation} className="w-full"></Lottie>
      </div>
      <Link to="/login">
        <button className="absolute top-5 right-6 py-2 px-4 border border-white text-xs text-white font-semibold z-10">
          SIGN IN
        </button>
      </Link>
      <div className="flex items-center justify-center absolute inset-0">
        <RegisterForm />
      </div>
    </div>
  );
}
