import React from "react";
import food from "../assets/food1.svg";
import searchicon from "../assets/search.svg";

function Right() {
  return (
    <div className=" bg-[#E9E7F2] h-full text-xs text-[#000000] font-poppins">
      <div className="mx-2">
        <div className="flex justify-end w-full p-1 lg:p-2  relative ">
          <input
            type="text"
            placeholder="Search Item/code/shortcut"
            className="px-1 lg:px-2 py-1 lg:py-2 w-2/3 lg:w-1/2 xl:w-2/5 rounded-md text-white font-light text-[10px] lg:text-[12px] border-none outline-none bg-[#52356F] placeholder-white "
          />
          <img
          src={searchicon}
          alt="search icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5"
        />
        </div>
      </div>
      <div className="mx-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-1  h-dvh overflow-y-auto ">
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col  rounded-lg shadow-sxl p-1.5 lg:p-2   cursor-pointer ${item.id === 2 ? 'text-white bg-gradient-to-br from-[#D62164] to-[#6E3887] ' : 'bg-white'}`}
            >
              <img
                src={food}
                alt="Card Image"
                className="w-full h-15 lg:h-15 object-cover rounded-lg"
              />
              <div className="mt-2 lg:mt-3 ">
                <h2 className="text-[7px] lg:text-[9px] font-medium ">{item.name}</h2>
                <p className={` text-xs lg:text-base font-bold ${item.id === 2 ? 'text-white' : "text-[#FF4F5F]" } `}>
                  {item.price} AED
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Right;

const data = [
  { id: 1, name: "Roasted stuff Mushroom", price: 25 },
  { id: 2, name: "Sunday stuff Mushroom", price: 15 },
  { id: 3, name: "Cod Starter Receipes", price: 20 },
  { id: 4, name: "Veg Starter", price: 30 },
  { id: 5, name: "Sandwich", price: 18 },
  { id: 6, name: "Sushi", price: 40 },
  { id: 7, name: "Steak", price: 50 },
  { id: 8, name: "Fish and Chips", price: 22 },
  { id: 9, name: "Curry", price: 35 },
  { id: 10, name: "Soup", price: 12 },
  { id: 11, name: "Soupe", price: 12 },
  { id: 12, name: "uuuiosi", price: 12 },
  { id: 9, name: "Curry", price: 35 },
  { id: 10, name: "Soup", price: 12 },
  { id: 11, name: "Soupe", price: 12 },
  { id: 12, name: "uuuiosi", price: 12 },
  { id: 1, name: "Roasted stuff Mushroom", price: 25 },
  { id: 2, name: "Sunday stuff Mushroom", price: 15 },
  { id: 3, name: "Cod Starter Receipes", price: 20 },
  { id: 4, name: "Veg Starter", price: 30 },
  { id: 5, name: "Sandwich", price: 18 },
  { id: 6, name: "Sushi", price: 40 },
  { id: 7, name: "Steak", price: 50 },
  { id: 8, name: "Fish and Chips", price: 22 },
  { id: 9, name: "Curry", price: 35 },
  { id: 10, name: "Soup", price: 12 },
  { id: 11, name: "Soupe", price: 12 },
  { id: 12, name: "uuuiosi", price: 12 },
  { id: 9, name: "Curry", price: 35 },
  { id: 10, name: "Soup", price: 12 },
  { id: 11, name: "Soupe", price: 12 },
  { id: 12, name: "uuuiosi", price: 12 },
];
