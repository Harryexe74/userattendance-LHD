import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full grid grid-cols-1 md:grid-cols-8 gap-3 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-2">
        {/* User Info Section */}
        <div className="col-span-2 bg-gray-800 bg-opacity-40 rounded-lg p-2 text-white ">
          <UserInfo />
        </div>
        {/* Form Section with Tabs */}
        <div className="col-span-6 h-96 bg-gray-800 bg-opacity-40  rounded-lg">
          <div className="flex text-[.6rem] md:text-[.8rem] p-4 text-nowrap">
            <button
              className={`py-2 px-4 focus:outline-none ${
                activeTab === "general"
                  ? "border-b-2 border-pink-500 text-pink-500"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("general")}
            >
              GENERAL INFO
            </button>
            <button
              className={`py-2 px-4 focus:outline-none ${
                activeTab === "personal"
                  ? "border-b-2 border-pink-500 text-pink-500"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              PERSONAL INFO
            </button>
            <button
              className={`py-2 px-4 focus:outline-none ${
                activeTab === "password"
                  ? "border-b-2 border-pink-500 text-pink-500"
                  : "text-white"
              }`}
              onClick={() => setActiveTab("password")}
            >
              CHANGE PASSWORD
            </button>
          </div>

          <div className="p-4">
            {activeTab === "general" && <GeneralInfo />}
            {activeTab === "personal" && <PersonalInfo />}
            {activeTab === "password" && <ChangePassword />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
