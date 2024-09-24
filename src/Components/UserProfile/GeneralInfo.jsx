import React from "react";

const GeneralInfo = () => {
  return (
    <div className="   text-white">
      <form className="pt-4  space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Contact Number *</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 bg-transparent focus:border-2 focus:border-white text-white"
              defaultValue="+92--------"
            />
          </div>
          <div>
            <label className="block">Alternative Contact Number</label>
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
              defaultValue={"+92---------"}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block">Email Address *</label>
            <input
              type="email"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
              defaultValue="khan@gmail.com"
            />
          </div>
          <div>
            <label className="block">Alternative Email Address</label>
            <input
              type="email"
              className="w-full p-2 rounded border border-gray-300 bg-transparent  text-white"
              defaultValue="khan@gmail.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-[.8rem] font-semibold mt-4">
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 border border-white shadow-2xl rounded-md"
          >
            UPDATE PROFILE
          </button>
          <button
            type="reset"
            className="bg-transparent text-white border border-white shadow-2xl py-2  rounded-md"
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
