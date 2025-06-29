import React from "react";

const Songs = (props) => {
  const parts = props.Title.split(" "); // ✅ define `parts` here

  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-4xl font-bold">
        {parts.slice(0, -1).join(" ")}{" "}
        <span className="text-[#EE10B0]">{parts[parts.length - 1]}</span>
      </h1>
      <div className="mt-6">2131</div>
    </div>
  );
};

export default Songs;
