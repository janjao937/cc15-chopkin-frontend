import React from "react";
import useAuth from "../Hooks/use-auth";
import RegisterForm from "../features/auth/RegisterForm";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  // const {} = useAuth();

  return (
    <div className="h-screen flex items-center justify-center border border-red-800">
      <Link to="/login">
        <button className="absolute top-5 right-6 py-2 px-4 border border-black text-xs font-semibold">
          SIGN IN
        </button>
      </Link>
      <RegisterForm />
    </div>
  );
}
