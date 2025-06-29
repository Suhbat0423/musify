import React from "react";

const MusicContainer = () => {
  return (
    <div className="w-62 h-72 bg-[#1F1F1F] flex flex-col items-center rounded-lg shadow-md p-2">
      <img
        className="w-48 h-48 mt-2 rounded"
        src="https://i.ytimg.com/vi/5fKfpK3nbUQ/hqdefault.jpg"
        alt="Song thumbnail"
      />
      <div className="w-full mt-2 flex flex-col px-2">
        <a href="#" className="text-white text-sm hover:text-[#EE10B0]">
          Song Title
        </a>
        <a href="#" className="text-gray-400 text-xs hover:text-[#EE10B0]">
          Artist Name
        </a>
      </div>
    </div>
  );
};

export default MusicContainer;
