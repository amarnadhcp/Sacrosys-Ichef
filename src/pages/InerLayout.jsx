import React from "react";
import LeftBar from "../components/LeftBar";
import Left from "../components/Left";

function InerLayout() {
  return (
    <div className="flex h-full rounded-2xl mx-7 mb-4">
      {/* Left SideBAr */}
      <div className="bg-green-500 rounded-l-3xl w-1/12 overflow-hidden">
        <LeftBar/>
      </div>
      <div className="w-4/12 bg-white">
        <Left/>
      </div>
      <div className="w-5/12 bg-black text-white">right</div>
      <div className="bg-blue-500 rounded-r-3xl w-2/12">right SideBAr</div>
    </div>
  );
}

export default InerLayout;
