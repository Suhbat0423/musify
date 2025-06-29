import React from "react";

const Chart = (props) => {
  return (
    <div className="flex justify-around items-center mb-4">
      <h1>#{props.number}</h1>
      <div className="h-16 w-[90%] bg-[#1E1E1E] rounded-md flex items-center justify-between ">
        <img
          className="h-16 w-16 rounded-md"
          src="https://i.ytimg.com/vi/SgHldVP0aak/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLCy-mGPTz_Hmo3f6P2hzZlsxOjBbw"
          alt=""
        />
        <div>
          <h1 className="font-bold">mxrningstar</h1>
          <p> үүрнээсээ чи</p>
        </div>
        <h1>Nov 4, 2023</h1>
        <h1>nightmares</h1>
        <h1 className="mr-26">2:45</h1>
      </div>
    </div>
  );
};

export default Chart;
