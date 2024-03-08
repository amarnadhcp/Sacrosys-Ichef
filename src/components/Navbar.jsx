import React from "react";
import vector from "../assets/logout.svg";
import settings from "../assets/settings.svg";
import notification from "../assets/notification.svg";
import Admin from "../assets/admin.svg";
import icon from "../assets/icon.svg";
import wifi from "../assets/wifi.svg";
import server from "../assets/server.svg";

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-between mx-4 md:mx-12">

      <img src={icon} alt="" className="w-20 h-20 md:mr-4" />

      <div className="flex items-center gap-4">

        <div className="hidden md:flex font-poppins">
          <div className="flex flex-col mr-2">
            <span className="text-white text-xs ">Online</span>
            <span className="text-white text-[9px] -mt-1">notification</span>
          </div>
          <img src={notification} alt="Notification" className="w-8 h-8" />
        </div>

        <div className="flex gap-2 font-inter md:text-sm text-xs">
          <button className="border-md bg-[#5D9710] rounded-lg px-3 py-1 text-white">
            Dine In
          </button>
          <button className="border-md bg-[#5D9710] rounded-lg px-3 py-1 text-white">
            Take Away
          </button>
          <button className="border-md bg-[#5D9710] rounded-lg px-3 py-1 text-white">
            Delivery
          </button>
        </div>

        <button className="border-md bg-[#FF4F5F] rounded-lg px-2 py-1 font-inter text-sm text-white">
          New Order
        </button>

        <div className="hidden md:flex font-poppins">
          <img src={wifi} alt="" className="w-5 h-5 " />
          <div className="flex flex-col ml-2">
            <span className="text-white text-xs">Internet</span>
            <span className="text-white text-[9px] -mt-1">Online</span>
          </div>
        </div>

        <div className="hidden md:flex font-poppins">
          <img src={server} alt="" className="w-5 h-5 " />
          <div className="flex flex-col ml-2">
            <span className="text-white text-xs">Server</span>
            <span className="text-white text-[8px] -mt-1">Online</span>
          </div>
        </div>

        <div className="flex items-center font-poppins">
          <img src={Admin} alt="" className="w-5 h-5" />
          <div className="ml-2 flex flex-col">
            <span className="text-white text-xs ">Admin</span>
            <span className="text-white text-[8px] -mt-1 "> Register
            </span>
          </div>
        </div>

        <img src={settings} alt="Settings" className="w-4 h-4" />
        <img src={vector} alt="Vector" className="w-6 h-6" />

      </div>
    </div>
  );
}

export default Navbar;
