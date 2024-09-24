import React from "react";

const ChangePassword = () => {
  return (
    <div className="  text-white">
      <form className="mt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block">Current Password *</label>
            <input
              type="password"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block">New Password *</label>
            <input
              type="password"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block">Confirm New Password *</label>
            <input
              type="password"
              className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
            />
          </div>
        </div>
        <div className=" mt-4">
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-2 w-full rounded-md"
          >
            UPDATE PASSWORD
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
