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
import Calendar from "./Calendar";

const OfficeSettings = () => {
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
        <h2 className="text-xl font-bold">
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
          className="text-center p-4 text-[1rem] border border-gray-200 text-black font-medium"
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
            className={`p-6 text-center cursor-pointer border border-gray-200 hover:bg-pink-300 ${
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
    <>
      <div
        className="flex items-center space-x-1 px-2 py-2"
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
      >
        <div className="w-1 h-6 bg-pink-500"></div>
        <h2 className="text-white  px-2 py-1  text-sm font-bold">
          OFFICE TIME SETTINGS
        </h2>
      </div>
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
        className="grid grid-cols-1 md:grid-cols-8 gap-2  text-white px-2"
      >
        {/* Calendar Section */}
        <div className="col-span-8 md:col-span-5">
          <Calendar />
        </div>

        {/* Sidebar Settings */}
        <div className="col-span-8 md:col-span-3 ">
          {isEditing ? (
            <div className="space-y-4 text-black">
              <div className="p-4  bg-gray-200 rounded-md">
                <div className="flex justify-between items-center">
                  <label className="block mb-2">Start Time:</label>
                  <input
                    type="time"
                    value={newSettings.startTime}
                    onChange={(e) =>
                      setNewSettings({
                        ...newSettings,
                        startTime: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label className="block mb-2">End Time:</label>
                  <input
                    type="time"
                    value={newSettings.endTime}
                    onChange={(e) =>
                      setNewSettings({
                        ...newSettings,
                        endTime: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex justify-between items-center">
                  {" "}
                  <label className="block mb-2">Off Day:</label>
                  <select
                    value={newSettings.offDay}
                    onChange={(e) =>
                      setNewSettings({ ...newSettings, offDay: e.target.value })
                    }
                  >
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    {/* Add other days here */}
                  </select>
                </div>
              </div>
              <div className="p-4 bg-gray-200 rounded-md">
                <div className="flex justify-between items-center">
                  {" "}
                  <label className="block mb-2">Maximum Late Time:</label>
                  <input
                    type="time"
                    value={newSettings.maxLateTime}
                    onChange={(e) =>
                      setNewSettings({
                        ...newSettings,
                        maxLateTime: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-between items-center">
                  <label className="block mb-2">Overtime After:</label>
                  <input
                    type="time"
                    value={newSettings.overtimeAfter}
                    onChange={(e) =>
                      setNewSettings({
                        ...newSettings,
                        overtimeAfter: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <button
                className="w-full py-2 bg-[#E94196] text-white text-[.7rem] font-bold rounded-md"
                onClick={handleUpdateClick}
                disabled={isUpdating}
              >
                {isUpdating ? "UPDATING..." : "UPDATE SETTINGS"}
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-black">
              <div className="p-4 bg-gray-200 rounded-md">
                <p className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Start Time:</span>
                  <strong className="text-sm font-bold">
                    {settings.startTime}
                  </strong>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-semibold">End Time:</span>
                  <strong className="text-sm font-bold">
                    {settings.endTime}
                  </strong>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Off Day:</span>
                  <strong className="text-sm font-bold">
                    {settings.offDay}
                  </strong>
                </p>
              </div>
              <div className="p-4 bg-gray-200 rounded-md">
                <p className="flex justify-between items-center">
                  <span className="text-sm font-semibold">
                    Maximum Late Time:
                  </span>
                  <strong className="text-sm font-bold">
                    {settings.maxLateTime}
                  </strong>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Overtime After:</span>
                  <strong className="text-sm font-bold">
                    {settings.overtimeAfter}
                  </strong>
                </p>
              </div>
              <button
                className="w-full py-2 bg-[#E94196] text-white text-[.7rem] font-bold rounded-md"
                onClick={handleModifyClick}
              >
                MODIFY SETTINGS
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OfficeSettings;
