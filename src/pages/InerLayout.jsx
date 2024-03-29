import React from "react";
import LeftBar from "../components/LeftBar";
import Left from "../components/Left";
import RightBar from "../components/RightBar";
import Right from "../components/Right";
function InerLayout() {
  return (
    <div className="flex h-[87vh] rounded-2xl mx-5 lg:mx-7 mb-2 lg:mb-4 overflow-hidden z-10">
      {/* Left SideBAr */}
      <div className="bg-green-500 rounded-l-3xl w-1/12 ">
        <LeftBar/>
      </div>
      <div className="w-4/12 bg-white">
        <Left/>
      </div>
      <div className="w-5/12 bg-red-400  ">
        <Right/>
      </div>
      <div className="bg-[#261B43]  rounded-r-3xl w-2/12"> 
       <RightBar/>
      </div>
    </div>
  );
}

export default InerLayout;
