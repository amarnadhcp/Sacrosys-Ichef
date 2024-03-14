import React from "react";
import staff from "../assets/staff.svg";
import customer from "../assets/customer.svg";
import pax from "../assets/pax.svg";
import billsearch from "../assets/billsearch.svg";
import billsplit from "../assets/billsplit.svg";
import offer from "../assets/offer.svg";
import comment from "../assets/bigcomment.svg";
import discount from "../assets/discount.svg";

function LeftBar() {
  return (
    <div className="flex flex-col bg-[#673074] items-center justify-center text-[9px] lg:text-xs text-white font-poppins h-full rounded-l-3xl">
      <div className="mb-2 pb-2 lg:mb-4  lg:pb-4 flex items-center flex-1 my-4 lg:my-6 flex-col border-b border-white w-full cursor-pointer">
        <img src={staff} alt="Image 1" className="w-3 h-3 lg:w-4 lg:h-4" />
        <span className="mt-1">Staff</span>
      </div>
      <div className="mb-2 pb-2 lg:mb-4 lg:pb-4 flex items-center flex-1  flex-col border-b border-white w-full cursor-pointer">
        <img src={customer} alt="Image 1" className="w-4 h-4 lg:w-5 lg:h-5" />
        <span className="mt-1">Customer</span>
      </div>
      <div className="mb-2 pb-2 lg:mb-4 lg:pb-4 flex items-center flex-1  flex-col border-b border-white w-full cursor-pointer">
        <img src={pax} alt="Image 1" className="w-3 h-3 lg:w-4 lg:h-4" />
        <span className="mt-1">Pax</span>
      </div>
      <div className="mb-2 pb-2 lg:mb-4 lg:pb-4 flex items-center flex-1  flex-col border-b border-white w-full cursor-pointer">
        <img src={billsearch} alt="Image 1" className="w-4 h-4 lg:w-5 lg:h-5" />
        <span className="mt-1">Search Bill</span>
      </div>
      <div className="mb-2 pb-2 lg:mb-4 lg:pb-4 flex items-center flex-1  flex-col border-b border-white w-full cursor-pointer">
        <img src={billsplit} alt="Image 1" className="w-4 h-4 lg:w-5 lg:h-5" />
        <span className="mt-1">Split</span>
      </div>
      <div className="mb-2 pb-2 lg:mb-4 lg:pb-4 flex items-center flex-1  flex-col border-b border-white w-full cursor-pointer">
        <img src={offer} alt="Image 1" className="w-3 h-3 lg:w-4 lg:h-4" />
        <span className="mt-1">Bogo Offer</span>
      </div>
      <div className="mb-2 pb-2 lg:mb-4 lg:pb-4 flex items-center flex-1  flex-col border-b border-white w-full cursor-pointer">
        <img src={discount} alt="Image 1" className="w-3 h-3 lg:w-4 lg:h-4" />
        <span className="mt-1">Discount</span>
      </div>
      <div className="mb-2 pb-2 lg:mb-4 lg:pb-4 flex items-center flex-1  flex-col w-full mt-2 cursor-pointer">
        <img src={comment} alt="Image 1" className="w-3 h-3 lg:w-4 lg:h-4" />
        <span className="mt-1">Comment</span>
      </div>
    </div>
  );
}

export default LeftBar;
