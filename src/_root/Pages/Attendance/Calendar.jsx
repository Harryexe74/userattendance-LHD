import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center py-5">
        <h2 className="text-[1rem] font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="bg-[#2C3E50] flex justify-center items-center rounded-md">
          <button
            onClick={prevMonth}
            className=" hover:bg-gray-800 text-white font-semibold py-1 px-4 rounded"
          >
            {"<"}
          </button>
          <button
            onClick={nextMonth}
            className=" hover:bg-gray-700 text-white font-bold py-1 px-4 rounded ml-2"
          >
            {">"}
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className="text-center p-2 text-[.7rem] md:text-[1rem] border border-gray-300 text-black font-medium"
          key={i}
        >
          {format(addDays(startDate, i), "EEE")}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center cursor-pointer border border-gray-300 hover:bg-pink-300 ${
              !isSameMonth(day, monthStart)
                ? "text-gray-500"
                : isSameDay(day, selectedDate)
                ? "bg-pink-500 text-white"
                : "bg-gray-200"
            }`}
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 text-black " key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="">{rows}</div>;
  };
  // --------------------------------------------------------
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState({
    startTime: "10:30 AM",
    endTime: "07:30 AM",
    offDay: "Sunday",
    maxLateTime: "10:40 AM",
    overtimeAfter: "08:30 AM",
  });

  const [newSettings, setNewSettings] = useState({ ...settings });
  const [isUpdating, setIsUpdating] = useState(false);

  const handleModifyClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setSettings(newSettings);
      setIsUpdating(false);
      setIsEditing(false);
    }, 1000); // Simulate an update with a timeout
  };
  return (
    <div
      style={{
        backgroundColor: "transparent",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
      }}
      className=" text-white "
    >
      {/* Calendar Section */}
      <div className=" p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md ">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>

      {/* Sidebar Settings */}
    </div>
  );
};

export default Calendar;
