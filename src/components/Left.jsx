import React from "react";
import comment from "../assets/comment.svg";
import deleteIcon from "../assets/delete.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";

function Left() {
  return (
    <div className="bg-white flex flex-col  align-top font-poppins h-full border-r-2 border-[#7A2B6E] ">
    
      <div className="flex gap-2 md:ml-4 text-xs p-2 ">
        <div className="flex items-center w-1/2">
          <label className=" text-right  ">Table :</label>
          <label className="  ml-2">88</label>
        </div>
        <div className="flex items-center w-1/2">
          <label className=" text-right    ">Staff :</label>
          <label className="  ml-2">8878</label>
        </div>
      </div>

      <div className="flex gap-2 md:ml-4 text-xs p-2">
        <div className="flex items-center w-1/2">
          <label className=" text-right  ">Token :</label>
          <label className=" flex-grow  ml-2">6589</label>
        </div>
        <div className="flex items-center w-1/2">
          <label className=" text-right  ">Customer :</label>
          <label className=" flex-grow  ml-2">Amar</label>
        </div>
      </div>

      

      {/* Table here */}
      <div className="justify-between flex flex-col h-full">
        <table className="w-full text-xs mt-1.5 font-poppins">
          <thead className="stiky top-0 font-inter text-white bg-[#52356F]">
            <tr>
              <th className="px-1 py-2">ITEMS</th>
              <th className="px-1 py-2">QTY</th>
              <th className="px-1 py-2">PRICE</th>
              <th className="px-1 py-2">Total</th>
              <th className="px-1 py-2">{"\u00A0\u00A0\u00A0"}</th>
              <th className="px-1 py-2">{"\u00A0\u00A0\u00A0"}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="text-center text-xs font-inter text-black border-b border-gray-300 "
              >
                <td className="px-2 py-2">{item.name}</td>
                {/* quanity */}
                <td className="px-2 py-2 flex items-center justify-evenly">
                  <div className="flex items-center">
                    <img src={decrease} alt="Plus" className="w-4 h-4 mr-2" />
                    <div className="bg-gray-200 rounded-sm px-2">
                      {item.quantity}
                    </div>
                    <img src={increase} alt="Plus" className="w-4 h-4 ml-2" />
                  </div>
                </td>
                {/* quanity */}
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.total}</td>
                <td>
                  <img src={comment} alt="" className="w-4 h-4" />
                </td>
                <td>
                  <img src={deleteIcon} alt="" className="w-4 h-4" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col justify-between mx-4 items-end mt-4">
          <div className="flex flex-row gap-64 mb-2">
            <button className="bg-[#6AB04C] px-10 py-2  rounded-sm text-xs text-white">
              PAY
            </button>
            <span>145.00 AED</span>
          </div>
          <div className="border border-b border-black w-full"></div>
        </div>

        <div className="flex flex-col mx-8 mb-2 -mt-60">
          <div className="flex justify-between gap-3 mb-3">
            <button className="bg-[#673074] px-8 py-2 rounded-md text-xs text-white">
              Order Placed
            </button>
            <button className="bg-[#673074] px-8 py-2 rounded-md text-xs text-white">
              KOT & Print
            </button>
            <button className="bg-[#673074] px-8 py-2 rounded-md text-xs text-white">
              KOT Details
            </button>
          </div>

          <div className="flex justify-between gap-3">
            <button className="bg-[#FF016E] px-8 py-2 rounded-md text-xs text-white">
              Save
            </button>
            <button className="bg-[#FF016E] px-8 py-2 rounded-md text-xs text-white">
              Print
            </button>
            <button className="bg-[#FF016E] px-8 py-2 rounded-md text-xs text-white">
              Save & e Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;

const data = [
  { id: 1, name: "CHICKEN BIRIYANI", quantity: 2, price: 10, total: 20 },
  { id: 2, name: "FRIED CHICKEN", quantity: 1, price: 15, total: 15 },
  { id: 3, name: "FISH FRY", quantity: 3, price: 8, total: 24 },
];
