"use client";

import React, { useState } from "react";

const menuSections = [
  {
    title: "Menu",
    items: ["Discovery", "Albums", "Songs"],
  },
  {
    title: "Library",
    items: ["Recently Added", "Most played"],
  },
  {
    title: "Playlist and favorite",
    items: ["Your favorites", "Your playlist", "Add playlist"],
    highlight: "Add playlist",
  },
  {
    title: "General",
    items: ["Setting", "Logout"],
    highlight: "Logout",
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Discovery");

  const handleClick = (label) => {
    setActiveItem(label);
    console.log(`Clicked: ${label}`);
  };

  return (
    <div className="h-[full] w-72 border-r-2 border-[#EE10B0] shadow-[10px_0_30px_-10px_#EE10B0] pl-16 flex flex-col">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#EE10B0] to-[#0E9EEF] bg-clip-text text-transparent mb-4 mt-12">
        Musify
      </h1>

      {menuSections.map((section, index) => (
        <div key={index} className="flex flex-col gap-6 mt-6">
          <h2 className="text-[#EE10B0] font-light text-sm">{section.title}</h2>
          {section.items.map((item, idx) => {
            const isActive = activeItem === item;
            const isHighlighted = item === section.highlight;

            return (
              <button
                key={idx}
                onClick={() => handleClick(item)}
                className={`text-left font-bold transition-colors  ${
                  isActive
                    ? "text-white bg-[#EE10B0] px-3 py-2 rounded-lg w-[80%]"
                    : isHighlighted
                    ? item === "Logout"
                      ? "text-[#EE10B0]"
                      : "text-[#0E9EEF]"
                    : "text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
