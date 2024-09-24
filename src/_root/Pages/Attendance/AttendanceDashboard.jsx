import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaDownload,
  FaGreaterThan,
  FaLessThan,
  FaTable,
} from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { MdCancel, MdModeEditOutline } from "react-icons/md";
import AttendanceTable from "./AttendanceTable";
import Calendar from "./Calendar";

const AttendanceDashboard = () => {
  const [activeTab, setActiveTab] = useState("table");

  // Render the appropriate component based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "table":
        return (
          <div className="col-span-4">
            <AttendanceTable />
          </div>
        );
      case "calendar":
        return (
          <div className="col-span-4">
            <Calendar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex justify-end items-center px-10 my-5 gap-2 z-0">
        <button
          onClick={() => setActiveTab("table")}
          className={`p-2 ${
            activeTab === "table" ? "border-b-2 border-secondary" : ""
          }`}
        >
          <FaTable className="h-6 w-6 text-secondary opacity-60" />
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`p-2 ${
            activeTab === "calendar" ? "border-b-2 border-secondary" : ""
          }`}
        >
          <FaCalendarAlt className="h-6 w-6 text-secondary opacity-60" />
        </button>
        <button onClick={() => alert("Downloading...")} className="p-2">
          <FaDownload className="h-6 w-6 text-secondary opacity-60" />
        </button>
        <select
          name="month"
          id="month"
          className="focus:border-pink-500 border-2 p-1 bg-transparent rounded-md border-secondary text-secondary text-[.8rem] font-semibold"
        >
          <option value="month">July</option>
          <option value="month">August</option>
          <option value="month">September</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 my-4 gap-2 p-2">
        {/* Sidebar */}

        <div className="col-span-5 md:mx-0 mx-8 md:col-span-1 ">
          {/* Sidebar Container */}
          <div className="w-full   rounded-lg shadow-lg  flex flex-col items-center gap-3">
            {/* Profile Section */}
            <div className="bg-primary text-secondary  rounded-lg w-full py-2 flex flex-col items-center justify-center">
              <div className="  flex justify-center items-center mb-1">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="h-16 w-16  object-cover  p-1 rounded-full "
                />
              </div>
              <h2 className="text-[.7rem] font-semibold">Faisal Khan</h2>
              <p className="text-gray-600 text-[.6rem]">Web Developer</p>
            </div>

            {/* Salary Section */}
            <div className="bg-primary text-secondary  rounded-lg w-full py-3 flex flex-col items-center justify-center">
              <p className="text-[.7rem] flex flex-col items-center justify-center font-semibold">
                Monthly salary <span className="font-bold "> Rs - 3000</span>
              </p>
              <p className="text-[.7rem] flex flex-col items-center justify-center font-semibold">
                Salary per day <span className="font-bold"> Rs- 100</span>
              </p>
            </div>

            {/* Attendance Section */}
            <div className="bg-primary rounded-lg w-full py-3 px-3 flex flex-col text-[.7rem] font-semibold items-center justify-center gap-1 ">
              <p className="text-secondary">31 Working days</p>
              <p className="text-secondary">26 Attended days</p>
              <p className="text-secondary">1 Leave days</p>
              <p className="text-secondary">0 Extra minutes</p>
              <p className="text-secondary">0 Late Attendance days</p>
            </div>

            {/* Total Salary Section */}
            <div className="bg-primary rounded-lg w-full py-3 text-[.7rem] font-semibold">
              <p className="text-secondary flex flex-col items-center justify-center">
                Total salary <span className="font-bold"> Rs - 2900</span>
              </p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        {renderContent()}
      </div>
    </>
  );
};

export default AttendanceDashboard;
