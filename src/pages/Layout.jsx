import React from "react";
import Navbar from "../components/Navbar";
import InerLayout from "./InerLayout";
import count from "../assets/count.svg";

function Layout() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-grow bg-gradient-to-br from-[#DE1F61]  via-[#573D8E] to-[#241046]  flex flex-col">
        <Navbar />
        {/* <div className="absolute inset-0 flex items-center ">
          <img src={count} alt="" className="w-8 h-8" />
        </div> */}
        <InerLayout />
      </div>
    </div>
  );
}

export default Layout;
