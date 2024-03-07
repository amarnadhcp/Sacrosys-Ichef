import React from "react";

function Left() {
  return (
    <div className="bg-white flex flex-col ml-10 align-top font-poppins justify-center h-full">

      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className=" text-right pr-1 text-sm">Table:</label>
            <label className="p-2 flex-grow  ml-2">kjlk</label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className=" text-right pr-1 text-sm">Token:</label>
            <label className="p-2 flex-grow  ml-2">kjlk</label>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className=" text-right pr-1 text-sm">Staff:</label>
            <label className="p-2 flex-grow  ml-2">kjlk</label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className=" text-right pr-1 text-sm">Customer:</label>
            <label className="p-2 flex-grow  ml-2">kjlk</label>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Left;
