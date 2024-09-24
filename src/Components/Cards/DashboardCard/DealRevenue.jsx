import React from "react";

const DealRevenue = ({ count, title }) => {
  return (
    <div className="bg-primary text-black rounded-md flex flex-col justify-center items-center gap-1 py-3">
      <h1 className="text-[.8rem] font-bold">{title}</h1>
      <h1 className="text-[1.5rem] font-semibold">AED {count}</h1>
    </div>
  );
};

export default DealRevenue;
