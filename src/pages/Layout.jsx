import React from "react";
import Navbar from "../components/Navbar";
import count from "../assets/count.svg";

function Layout() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-grow bg-gradient-to-br from-[#FF4F5F] to-[#241046] flex flex-col">
        <Navbar/>
        
      </div>
    </div>
  );
}

export default Layout;
