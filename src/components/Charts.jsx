import React from "react";
import Chart from "./Chart";

const Charts = (props) => {
  const parts = props.Title.split(" ");
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-4xl font-bold">
        {parts.slice(0, -1).join(" ")}{" "}
        <span className="text-[#EE10B0]">{parts[parts.length - 1]}</span>
      </h1>{" "}
      <div className="flex justify-end">
        <ul className="flex w-[60%] justify-around text-xl">
          <li>Relase Date</li>
          <li>album</li>
          <li>Time</li>
        </ul>
      </div>
      {Array.from({ length: 10 }, (_, i) => (
        <Chart key={i} number={i + 1} />
      ))}
    </div>
  );
};

export default Charts;
