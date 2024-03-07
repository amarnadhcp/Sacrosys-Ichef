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
    <div className="flex flex-col bg-[#673074] items-center justify-center text-xs text-white font-poppins h-full rounded-l-3xl">
      <div className="mb-4 pb-4 flex items-center flex-1 my-6 flex-col border-b border-white w-full">
        <img src={staff} alt="Image 1" className="w-4 h-4" />
        <span className="mt-1">Staff</span>
      </div>
      <div className="mb-4 pb-4 flex items-center flex-col border-b border-white w-full ">
        <img src={customer} alt="Image 1" className="w-5 h-5" />
        <span className="mt-1">Customer</span>
      </div>
      <div className="mb-4 pb-4 flex items-center flex-1  flex-col border-b border-white w-full ">
        <img src={pax} alt="Image 1" className="w-4 h-4" />
        <span className="mt-1">Pax</span>
      </div>
      <div className="mb-4 pb-4 flex items-center flex-1  flex-col border-b border-white w-full ">
        <img src={billsearch} alt="Image 1" className="w-5 h-5" />
        <span className="mt-1">Search Bill</span>
      </div>
      <div className="mb-4 pb-4 flex items-center flex-1  flex-col border-b border-white w-full ">
        <img src={billsplit} alt="Image 1" className="w-5 h-5" />
        <span className="mt-1">Split</span>
      </div>
      <div className="mb-4 pb-4 flex items-center flex-1  flex-col border-b border-white w-full ">
        <img src={offer} alt="Image 1" className="w-4 h-4" />
        <span className="mt-1">Bogo Offer</span>
      </div>
      <div className="mb-4 pb-4 flex items-center flex-1  flex-col border-b border-white w-full ">
        <img src={discount} alt="Image 1" className="w-4 h-4" />
        <span className="mt-1">Discount</span>
      </div>
      <div className="mb-4 pb-4 flex items-center flex-1  flex-col w-full mt-2">
        <img src={comment} alt="Image 1" className="w-4 h-4" />
        <span className="mt-1">Comment</span>
      </div>
    </div>
  );
}

export default LeftBar;
