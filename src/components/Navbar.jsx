import React from "react";
import vector from "../assets/logout.png";
import settings from "../assets/settings.png";
import notification from "../assets/notification.png";
import Admin from "../assets/admin.png";
import icon from "../assets/icon.png";

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-between mx-10 ">
      <img src={icon} alt="" className="w-20 h-20"/>

      <div className="flex items-center gap-4">
        <img src={notification} alt="Notification" className="w-6 h-6" />

        <div className="flex gap-2">
          <button className="border-md bg-[#5D9710] rounded-lg px-3 py-1 text-white">
            Dine
          </button>
          <button className="border-md bg-[#5D9710] rounded-lg px-3 py-1 text-white">
            Take away
          </button>
          <button className="border-md bg-[#5D9710] rounded-lg px-3 py-1 text-white">
            Delivery
          </button>
        </div>

        <button className="border-md bg-[#FF4F5F] rounded-lg px-3 py-1 text-white">
          New Order
        </button>

        <span className="text-white">Option 1</span>
        <span className="text-white">Option 2</span>

        <div className="flex items-center justify-between  ">
          <div className="flex items-center">
            <img src={Admin} alt="" className="w-5 h-5" />
             <div className="ml-2">
              <span className="text-white text-md">Admin</span>
                <div className="flex mt-0">
                  <span className="text-white text-[10px] ml-2">Register</span>
                </div>
            </div>
          </div>
        </div>

        <img src={settings} alt="Settings" className="w-4 h-4" />
        <img src={vector} alt="Vector" className="w-5 h-5" />
      </div>
    </div>
  );
}

export default Navbar;
