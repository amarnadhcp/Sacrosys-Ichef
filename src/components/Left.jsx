import React from "react";
import comment from "../assets/comment.svg";
import deleteIcon from "../assets/delete.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";

function Left() {
  return (
    <div className="bg-white flex flex-col  align-top font-poppins h-full border-r-2 border-[#7A2B6E] ">

      <div className="flex gap-2 md:ml-4 text-[10px] lg:text-xs p-2 ">
        <div className="flex items-center w-1/2">
          <label className=" text-right  ">Table :</label>
          <label className="  ml-2">88</label>
        </div>
        <div className="flex items-center w-1/2">
          <label className=" text-right    ">Staff :</label>
          <label className="  ml-2">8878</label>
        </div>
      </div>

      <div className="flex gap-2 md:ml-4 text-[10px] lg:text-xs p-2">
        <div className="flex items-center w-1/2">
          <label className=" text-right  ">Token :</label>
          <label className=" flex-grow  ml-2">6589</label>
        </div>
        <div className="flex items-center w-1/2">
          <label className=" text-right  ">Customer :</label>
          <label className=" flex-grow  ml-2">Amar</label>
        </div>
      </div>

      {/* Table  */}
      <div className="justify-between flex flex-col h-full">
        <table className="w-full text-[8px] lg:text-xs mt-1.5 font-poppins">
          <thead className="stiky top-0 font-inter text-white bg-[#52356F]">
            <tr>
              <th className="px-1 py-2">ITEMS</th>
              <th className="px-1 py-2">QTY</th>
              <th className="px-1 py-2">PRICE</th>
              <th className="px-1 py-2">Total</th>
              <th className="px-1 py-2">{"\u00A0\u00A0\u00A0\u00A0\u00A0"}</th>
              <th className="px-1 py-2">{"\u00A0\u00A0\u00A0\u00A0\u00A0"}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="text-center  font-inter text-black border-b border-gray-300 "
              >
                <td className="px-2 py-2">{item.name}</td>
                {/* quanity */}
                <td className="px-2 py-2 flex items-center justify-evenly">
                  <div className="flex items-center">
                    <img
                      src={decrease}
                      alt="Plus"
                      className="w-3 h-3 lg:w-4 lg:h-4 mr-2"
                    />
                    <div className="bg-gray-200 rounded-sm px-2 w-4 flex justify-center items-center">
                      {item.quantity}
                    </div>
                    <img
                      src={increase}
                      alt="Plus"
                      className="w-3 h-3 lg:w-4 lg:h-4 ml-2"
                    />
                  </div>
                </td>
                {/* quanity */}
                <td className="px-2  py-2">{item.price}</td>
                <td className="px-2 py-2">{item.total}</td>
                <td>
                  <img
                    src={comment}
                    alt=""
                    className="w-3 h-3 lg:w-4 lg:h-4 object-contain "
                  />
                </td>
                <td>
                  <img
                    src={deleteIcon}
                    alt=""
                    className="w-3 h-3 lg:w-4 lg:h-4 object-contain"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>

          <div className="flex flex-col  mx-2 ">
            <div className="flex mb-2 lg:mb-3 justify-between mx-2 lg:mx-4">
              <button className=" px-5 lg:px-12 py-1 lg:py-2  rounded-md  text-[10px] lg:text-sm font-medium text-white bg-gradient-to-br from-[#BADC58] to-[#6AB04C]">
                Pay
              </button>
              <span className="flex text-[#643075] justify-center items-center text-sm lg:text-lg font-bold">
                145.00 AED
              </span>
            </div>
            <div className="border border-b border-[#000000] w-full"></div>
          </div>

          <div className="flex flex-col mx-4 lg:mx-6 mb-2 mt-2 font-medium">
            <div className="flex justify-between gap-1 mb-3 md:text-[9px] lg:text-xs">
              <button className="bg-[#673074] md:px-2 lg:px-9 py-1 lg:py-2 rounded-md  text-white">
                Order Placed
              </button>
              <button className="bg-[#673074] md:px-2 lg:px-9 py-1 lg:py-2 rounded-md  text-white">
                KOT & Print
              </button>
              <button className="bg-[#673074] md:px-2 lg:px-9 py-1 lg:py-2 rounded-md  text-white">
                KOT Details
              </button>
            </div>

            <div className="flex justify-between  md:text-[10px] lg:text-xs ">
              <button className="bg-[#FF016E] md:px-3 lg:px-9 py-1 lg:py-2 rounded-md  text-white">
                Save
              </button>
              <button className="bg-[#FF016E] md:px-6  lg:px-16 py-1 lg:py-2 rounded-md  text-white">
                Print
              </button>
              <button className="bg-[#FF016E] md:px-3 lg:px-12 py-1 lg:py-2 rounded-md  text-white">
                Save & e Bill
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Left;

const data = [
  { id: 1, name: "Chiken Biriyani", quantity: 2, price: 10, total: 20 },
  { id: 2, name: "Fried Chiken", quantity: 1, price: 15, total: 15 },
  { id: 3, name: "Fish Fry", quantity: 3, price: 8, total: 24 },
  
];
