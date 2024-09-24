import React from "react";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";
import ProfileDropdown from "./ProfileDropDown/ProfileDropDown";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-3    text-secondary">
      <div className="hidden md:block">
        {/* <FiSearch className="text-sm" /> */}
        <input
          type="text"
          placeholder="Search Leads"
          className="bg-transparent border border-secondary shadow-lg rounded-md text-secondary px-4 py-1 focus:outline-secondary"
        />
      </div>

      <ProfileDropdown />
    </div>
  );
};

export default Navbar;
