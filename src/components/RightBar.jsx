import React from 'react';

function RightBar() {
  return (
    <div className="flex flex-col bg-[#261B43] items-center justify-center text-md text-white font-poppins h-full rounded-r-3xl">
      <ul className="list-none p-0 flex flex-col justify-center items-center h-full">
        <li className="py-2 flex-grow mt-3">Favourites</li>
        <li className="py-2 flex-grow">Starter</li>
        <li className="py-2 flex-grow">Rice</li>
        <li className="py-2 flex-grow">Juice</li>
        <li className="py-2 flex-grow">Buffets & Brunch</li>
        <li className="py-2 flex-grow">Fried Chicken</li>
        <li className="py-2 flex-grow">Mojito</li>
        <li className="py-2 flex-grow">Veg</li>
        <li className="py-2 flex-grow">Non Veg</li>
        <li className="py-2 flex-grow">Ice Cream</li>
      </ul>
    </div>
  );
}

export default RightBar;
