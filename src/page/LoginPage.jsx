import React from "react";
import LoginForm from "../features/auth/LoginForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="h-1/2 bg-cover bg-center relative bg-[url('/src/assets/bg1.jpg')]"></div>
      <Link to="/register">
        <button className="absolute top-5 right-6 py-2 px-4 border border-black text-xs font-semibold z-10">
          SIGN UP
        </button>
      </Link>
      <div className="flex items-center justify-center absolute inset-0">
        <LoginForm />
      </div>
    </div>
  );
}
