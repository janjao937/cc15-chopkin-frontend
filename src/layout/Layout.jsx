import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

export default function Layout() {
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <LiveChat />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
