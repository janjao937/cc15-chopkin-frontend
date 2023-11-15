import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

export default function Layout() {
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <Header />
      <div id="CONTAINER" className="max-w-[1400px] mx-auto">
        <LiveChat />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
