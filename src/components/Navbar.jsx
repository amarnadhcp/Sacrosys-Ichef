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
    <div className=" flex items-center h-[8vh] lg:h-[10vh] justify-between mx-6 lg:mx-12 text-white z-10">

      <img src={icon} alt="" className="w-14 h-14 lg:w-20 lg:h-20 object-contain" />

      <div className="flex items-center md:gap-2 lg:gap-3 xl:gap-4">

        <div className=" flex items-center justify-center font-poppins cursor-pointer">
          <div className="flex flex-col text-end  ">
            <span className="text-white text-[11px] lg:text-xs ">Online</span>
            <span className="text-white text-[7px] lg:text-[8px] -mt-1">notification</span>
          </div>
          <div className="flex items-center relative">
            <img src={notification} alt="Notification" className="w-6 h-6 lg:w-8 lg:h-8" />
              <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-4 lg:h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-[9px]">20</span>
              </div>
          </div>
        </div>


        <div className="flex gap-1 lg:gap-2 font-inter  md:text-[10px] lg:text-sm ">
          <button className=" bg-[#5D9710] rounded-md px-2 lg:px-3 py-1 ">
            Dine In
          </button>
          <button className="border-md bg-[#5D9710] rounded-md px-2 lg:px-3 py-1 ">
            Take Away
          </button>
          <button className="border-md bg-[#5D9710] rounded-md px-2 lg:px-3 py-1 ">
            Delivery
          </button>
        </div>

        <button className="border-md bg-[#FF4F5F] rounded-md px-2 lg:px-3 py-1 font-inter md:text-[10px] lg:text-sm ">
          New Order
        </button>

        <div className=" flex items-center justify-center font-poppins cursor-pointer">
          <img src={wifi} alt="" className="w-4 h-4 lg:w-5  lg:h-5 mb-0.5" />
          <div className="ml-1  flex flex-col ">
            <span className=" text-[11px] lg:text-xs">Internet</span>
            <span className=" text-[7px] lg:text-[8px] -mt-1 ">Online</span>
          </div>
        </div>

        <div className=" flex items-center justify-center font-poppins cursor-pointer">
          <img src={server} alt="" className="w-4 h-4  lg:w-5 lg:h-5" />
          <div className="ml-1  flex flex-col ">
            <span className=" text-[11px] lg:text-xs">Server</span>
            <span className=" text-[7px] lg:text-[8px] -mt-1 ">Online</span>
          </div>
        </div>

        <div className="flex items-center justify-center font-poppins cursor-pointer">
          <img src={Admin} alt="" className="w-4 h-4 lg:w-5 lg:h-5" />
          <div className="ml-1  flex flex-col">
            <span className=" text-[11px] lg:text-xs ">Admin</span>
            <span className=" text-[7px] lg:text-[8px] -mt-1 "> Register
            </span>
          </div>
        </div>

        <img src={settings} alt="Settings" className="md:w-3 md:h-3 lg:w-4 lg:h-4 gap-0 cursor-pointer" />
        <img src={vector} alt="Vector" className="md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />

      </div>
      
    </div>
  );
}

export default Navbar;
