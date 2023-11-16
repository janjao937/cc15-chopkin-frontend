import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

export default function Layout() {
  return (
    <div className="w-[100vw]">
      <Header />
      <div id="CONTAINER" className=" mx-auto min-h-[83vh]">
        <LiveChat />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
