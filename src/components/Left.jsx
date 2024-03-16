import React from "react";
import comment from "../assets/comment.svg";
import deleteIcon from "../assets/delete.svg";
import increase from "../assets/increase.svg";
import decrease from "../assets/decrease.svg";

function Left() {
  return (
    <div className="bg-white  flex flex-col  align-top font-poppins h-full border-r-2 border-[#7A2B6E] ">

      <div className="text-[10px] md:ml-1 lg:ml-2 flex-1 xl:text-xs p-1 xl:p-2 text-[#000000] font-semibold  mt-1 xl:mt-2 space-y-2 xl:space-y-3">
        <div className="flex gap-2">
          <div className="flex items-center w-1/2">
            <label className=" text-right  ">Table :</label>
            <label className="  ml-2">88</label>
          </div>
          <div className="flex items-center w-1/2">
            <label className=" text-right    ">Staff :</label>
            <label className="  ml-2">8878</label>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center w-1/2">
            <label className=" text-right  ">Token :</label>
            <label className=" flex-grow  ml-2">6589</label>
          </div>
          <div className="flex items-center w-1/2">
            <label className=" text-right  ">Customer :</label>
            <label className=" flex-grow  ml-2">Amar</label>
          </div>
        </div>
      </div>

      <div className="justify-between flex flex-col h-full">

      {/* Table  */}
        <table className="w-full text-[9px] lg:text-[10px] xl:text-xs mt-1.5 font-poppins font-semibold">
          <thead className="stiky top-0  text-white bg-[#52356F]">
            <tr>
              <th className="px-1 py-1.5 lg:py-2">ITEMS</th>
              <th className="px-1 py-1.5 lg:py-2">QTY</th>
              <th className="px-1 py-1.5 lg:py-2">PRICE</th>
              <th className="px-1 py-1.5 lg:py-2">Total</th>
              <th className="px-1 py-1.5 lg:py-2">{"\u00A0\u00A0\u00A0\u00A0\u00A0"}</th>
              <th className="px-1 py-1.5 lg:py-2">{"\u00A0\u00A0\u00A0\u00A0\u00A0"}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center   text-[#52356F] border-b border-gray-300">
                <td className="px-2 py-1.5 lg:py-2">{item.name}</td>
                {/* quanity */}
                <td className="px-2 py-1.5 lg:py-2 flex items-center justify-evenly">
                  <div className="flex items-center justify-center">
                    <img src={decrease} alt="Plus"
                      className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2"
                    />
                    <div className="bg-gray-200 rounded-sm px-2 w-4 flex justify-center items-center">
                      {item.quantity}
                    </div>
                    <img src={increase} alt="Plus"
                      className="w-3 h-3 lg:w-4 lg:h-4  ml-1 lg:ml-2"
                    />
                  </div>
                </td>
                {/* quanity end*/}
                <td className="px-2  py-1.5 lg:py-2">{item.price}</td>
                <td className="px-2 py-1.5 lg:py-2">{item.total}</td>
                <td>
                  <img src={comment} alt=""
                  className="w-3 h-3 lg:w-4 lg:h-4 object-contain "
                  />
                </td>
                <td>
                  <img src={deleteIcon} alt=""
                    className="w-3 h-3 lg:w-4 lg:h-4 object-contain"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>

          <div className="flex flex-col mx-2">
            <div className="flex mb-2 lg:mb-3 justify-between mx-1 lg:mx-3">
              <button className=" px-5 lg:px-12 py-1 lg:py-2  rounded-md  text-[10px] lg:text-xs xl:text-sm font-medium text-white bg-gradient-to-br from-[#BADC58] to-[#6AB04C]">
                Pay
              </button>
              <span className="flex text-[#643075] justify-center items-center text-sm lg:text-lg font-bold">
                145.00 AED
              </span>
            </div>
            <div className="border border-b border-[#000000] border-t-0 border-opacity-50 w-full"></div>
          </div>

          <div className="flex flex-col mx-2  xl:mx-3 mb-1 lg:mb-2 mt-2 font-medium  text-white md:text-[8px]  xl:text-xs">
            <div className="flex justify-between gap-2 mb-1 xl:mb-3 ">
              <button className="bg-[#673074] flex-1 py-1 lg:py-2 rounded-md ">
                Order Placed
              </button>
              <button className="bg-[#673074] flex-1 py-1 lg:py-2 rounded-md ">
                KOT & Print
              </button>
              <button className="bg-[#673074] flex-1 py-1 lg:py-2 rounded-md ">
                KOT Details
              </button>
            </div>

            <div className="flex justify-between gap-2">
              <button className="bg-[#FF016E] flex-1  py-1 lg:py-2 rounded-md ">
                Save
              </button>
              <button className="bg-[#FF016E] flex-1 px-3 lg:px-8 py-1 lg:py-2 rounded-md ">
                Print
              </button>
              <button className="bg-[#FF016E] flex-1 px-3 lg:px-8 py-1 lg:py-2 rounded-md ">
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
  { id: 1, name: " Biriyani", quantity: 2, price: 10, total: 20 },
  { id: 2, name: "Fried Chiken", quantity: 1, price: 15, total: 15 },
  { id: 3, name: "Fish Fry", quantity: 3, price: 8, total: 24 },
];
