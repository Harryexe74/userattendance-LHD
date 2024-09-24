import React from "react";

const PersonalInfo = () => {
  return (
    <div className=" text-white">
      <form className="mt-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Date Of Birth *</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
              defaultValue=""
              placeholder="mm/dd/yy"
            />
          </div>
          <div>
            <label className="block">Gender</label>
            <select
              type="text"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
              defaultValue="SALES MANAGER"
            >
              <option>Male</option> <option>Female</option>{" "}
            </select>
          </div>
          <div>
            <label className="block">Country *</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
              defaultValue=""
              placeholder="Your Country"
            />
          </div>
          <div>
            <label className="block">Address *</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
              defaultValue=""
              placeholder="Type Your Address"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-pink-500 w-full text-white font-semibold py-2  rounded-md"
          >
            UPDATE PERSONAL INFO
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
