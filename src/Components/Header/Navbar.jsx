
import ProfileDropdown from "./ProfileDropDown/ProfileDropdown";
import React, { Suspense } from 'react';

// Lazy load the ProfileDropDown component
// const ProfileDropDown = lazy(() => import('./ProfileDropDown/ProfileDropdown'));
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

      <div>
      {/* Other Navbar content */}
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileDropdown />
      </Suspense>
    </div>
    </div>
  );
};

export default Navbar;
