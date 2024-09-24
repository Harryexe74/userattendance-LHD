import React, { useState } from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import {
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneSquare,
  FaPhoneVolume,
  FaTimesCircle,
} from "react-icons/fa";
import { FiPhoneCall, FiPhoneMissed, FiPhoneOutgoing } from "react-icons/fi";

const Summary = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [activeMainTab, setActiveMainTab] = useState("calls-count");

  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setActiveMainTab("calls-count");
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };
  return (
    <div>
      <div className=" bg-[#D1E9FC] bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-lg w-full  ">
        {/* Main Tabs */}
        <div className="flex my-4">
          <div>
            <button
              //   onClick={() => setActiveMainTab("summary")}
              className={`flex-1 text-left py-3  px-4 ${
                activeMainTab === "summary"
                  ? "bg-[#FFF7CC] rounded-md  text-black"
                  : "text-black font-bold"
              }`}
            >
              Summary
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className={`flex-1 text-left py-2 px-4 relative overflow-hidden ${
                activeMainTab === "calls-count"
                  ? "bg-[#FFF7CC] rounded-md mt-3 font-semibold text-gray-700"
                  : "text-black font-bold"
              } ${animate ? "water-flow" : ""}`}
            >
              CALLS COUNT
            </button>
          </div>
        </div>

        {/* Sub Tabs */}
        <div className="flex gap-2 items-center bg-gray-300  w-full border-b border-gray-300">
          {["today", "yesterday", "this-month"].map((tab) => (
            <div className="ps-4 text-[.8rem] font-semibold py-1">
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-center ${
                  activeTab === tab
                    ? "text-pink-500 border-b-4 border-pink-500"
                    : "text-gray-500"
                }`}
              >
                {tab.toUpperCase().replace("-", " ")}
              </button>
            </div>
          ))}
        </div>

        {/* Call Summary */}
        <div className="text-center">
          <h2 className="text-black font-bold text-[.8rem] my-4">
            0 CALL TODAY
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 p-6">
            <div className="flex items-center">
              <FiPhoneOutgoing className="text-pink-500 text-xl mr-2" />
              <span className="text-black text-sm font-semibold">
                Outgoing calls: <span className="font-bold">0</span>
              </span>
            </div>
            <div className="flex items-center">
              <FiPhoneCall className="text-pink-500 text-xl mr-2" />
              <span className="text-black text-sm font-semibold">
                Incoming calls: <span className="font-bold">0</span>
              </span>
            </div>
            <div className="flex items-center">
              <FiPhoneMissed className="text-pink-500 text-xl mr-2" />
              <span className="text-black text-sm font-semibold">
                Answered: <span className="font-bold">0</span>
              </span>
            </div>
            <div className="flex items-center">
              <BsTelephoneInbound className="text-pink-500 text-xl mr-2" />
              <span className="text-black text-sm font-semibold">
                Not answered: <span className="font-bold">0</span>
              </span>
            </div>
            <div className="flex items-center">
              <FiPhoneCall className="text-pink-500 text-xl mr-2" />
              <span className="text-black text-sm font-semibold">
                Received: <span className="font-bold">0</span>
              </span>
            </div>
            <div className="flex items-center">
              <FiPhoneMissed className="text-pink-500 text-2xl mr-2" />
              <span className="text-black text-sm font-semibold">
                Missed: <span className="font-bold">0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
