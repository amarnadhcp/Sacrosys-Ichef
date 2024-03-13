import React, { useState } from 'react';

function RightBar() {
  
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (index) => {
    setSelectedItem(index); 
  };

  return (
    <div className="flex flex-col bg-[#261B43] items-center justify-center  lg:text-md text-white font-poppins h-full rounded-r-3xl">
      <ul className="list-none p-0 flex flex-col justify-center items-center h-full w-full mb-4 mt-1">
        {['Favourites', 'Starter', 'Rice', 'Juice', 'Buffets & Brunch', 'Fried Chicken', 'Mojito', 'Veg', 'Non Veg', 'Ice Cream'].map((item, index) => (
          <li
            key={index}
            className={`py-2 flex  flex-grow mt-3 cursor-pointer  w-full rounded-r-full justify-center items-center   text-center ${selectedItem === index ? 'bg-blue-500' : ''} `}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightBar;