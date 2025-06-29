import React from "react";
import MusicContainer from "./MusicContainer";

const Songs = (props) => {
  const parts = props.Title.split(" ");

  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-4xl font-bold">
        {parts.slice(0, -1).join(" ")}{" "}
        <span className="text-[#EE10B0]">{parts[parts.length - 1]}</span>
      </h1>
      <div className="mt-6 flex gap-10 items-center">
        <MusicContainer />
        <MusicContainer />
        <MusicContainer />
        <MusicContainer />
        <MusicContainer />
        <div className="flex flex-col items-center gap-4">
          <div className="border-1 w-20 h-20 flex justify-center items-center rounded-full text-3xl">
            +
          </div>
          <p>view more</p>
        </div>
      </div>
    </div>
  );
};

export default Songs;
