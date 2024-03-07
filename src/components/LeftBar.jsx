import React from "react";
import staff from "../assets/staff.svg";

function LeftBar() {
  return (
    <div className="flex flex-col bg-[#673074] items-center justify-center text-xs text-white font-poppins h-full rounded-l-3xl">
     <div className="border-b border-white mb-4 pb-4 flex items-center flex-1 my-6 flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span className="">Staff</span>
      </div>
      <div className="border-b border-white mb-4 pb-4 flex items-center flex-1  flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span>Customer</span>
      </div>
      <div className="border-b border-white mb-4 pb-4 flex items-center flex-1  flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span>Pax</span>
      </div>
      <div className="border-b border-white mb-4 pb-4 flex items-center flex-1  flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span>Search Bill</span>
      </div>
      <div className="border-b border-white mb-4 pb-4 flex items-center flex-1  flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span>Split</span>
      </div>
      <div className="border-b border-white mb-4 pb-4 flex items-center flex-1  flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span>Bogo Offer</span>
      </div>
      <div className="border-b border-white mb-4 pb-4 flex items-center flex-1  flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span>Discount</span>
      </div>
      <div className=" mb-4 pb-4 flex items-center flex-1  flex-col">
        <img src={staff} alt="Image 1" className="w-5 h-5 mr-2" />
        <span>Comment</span>
      </div>
    </div>
  );
}

export default LeftBar;
