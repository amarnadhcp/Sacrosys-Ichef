import React from "react";
import food from "../assets/food1.svg"

function Right() {
  return (
    <div className="flex flex-col bg-[#E9E7F2] text-xs text-white font-poppins h-full overflow-x-auto">
      <div className="mx-3">

      <div className="flex justify-end w-full p-1 lg:p-2 mt-2">
        <input
          type="text"
          placeholder="Search Item/code/shortcut"
          className="px-2 lg:px-4  py-2 w-2/5  rounded-md text-white border-none outline-none   bg-[#52356F]"
        />
      </div>


      <div className="flex justify-between w-full mt-4 ">

        <div className="flex flex-col bg-white rounded-lg shadow-2xl  p-2 mx-2 w-2/6">
          <img
            src={food}
            alt="Card Image"
            className="w-full h-15 object-cover rounded-lg"
          />
          <div className="mt-3">
            <h2 className="text-xs text-[#000000] font-medium">Roasted stuff </h2>
            <p className="text-[#FF4F5F] text-base font-bold mt-1">25 AED</p>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-2xl  p-2 mx-2 w-2/6">
          <img
            src={food}
            alt="Card Image"
            className="w-full h-15 object-cover rounded-lg"
          />
          <div className="mt-3">
            <h2 className="text-xs text-[#000000] font-medium">Roasted stuff </h2>
            <p className="text-[#FF4F5F] text-base font-bold mt-1">25 AED</p>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-2xl  p-2 mx-2 w-2/6">
          <img
            src={food}
            alt="Card Image"
            className="w-full h-15 object-cover rounded-lg"
          />
          <div className="mt-3">
            <h2 className="text-xs text-[#000000] font-medium">Roasted stuff </h2>
            <p className="text-[#FF4F5F] text-base font-bold mt-1">25 AED</p>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-2xl  p-2 mx-2 w-2/6">
          <img
            src={food}
            alt="Card Image"
            className="w-full h-15 object-cover rounded-lg"
          />
          <div className="mt-3">
            <h2 className="text-xs text-[#000000] font-medium">Roasted stuff </h2>
            <p className="text-[#FF4F5F] text-base font-bold mt-1">25 AED</p>
          </div>
        </div>
        
      </div>

      


      

      

      
      
      

     

      </div>
      
    </div>
  );
}

export default Right;
