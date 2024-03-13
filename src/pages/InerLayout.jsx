import React from "react";
import LeftBar from "../components/LeftBar";
import Left from "../components/Left";
import RightBar from "../components/RightBar";
import Right from "../components/Right";
function InerLayout() {
  return (
    <div className="flex h-full rounded-2xl mx-3 lg:mx-7 mb-2 lg:mb-4 ">
      {/* Left SideBAr */}
      <div className="bg-green-500 rounded-l-3xl w-1/12 overflow-hidden">
        <LeftBar/>
      </div>
      <div className="w-4/12 bg-white">
        <Left/>
      </div>
      <div className="w-5/12 bg-white text-white ">
        <Right/>
      </div>
      <div className="bg-[#261B43] text-white rounded-r-3xl w-2/12"> 
       <RightBar/>
      </div>
    </div>
  );
}

export default InerLayout;
