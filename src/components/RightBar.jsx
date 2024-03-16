import React, { useState } from 'react';

function RightBar() {
  
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (index) => {
    setSelectedItem(index); 
  };

  return (
    <div className="flex flex-col bg-[#261B43] items-center justify-center text-xs xl:text-sm text-white font-Mulish font-medium h-full rounded-r-3xl">
      <ul className="list-none p-0 flex flex-col justify-center items-center h-full w-full mb-4 mt-1">
        {['FAVOURITES', 'STARTER', 'RICE', 'JUICE', 'BUFFETS & BRUNCH', 'FRIED CHIKEN', 'MOJITO', 'VEG', 'NON VEG', 'ICE CREAM'].map((item, index) => (
          <li
            key={index}
            className={`py-2 flex  flex-grow mt-3 cursor-pointer  w-full rounded-r-full justify-center items-center   text-center ${selectedItem === index ? 'bg-[#E9E7F2] text-black text-sm lg:text-base' : ''} `}
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