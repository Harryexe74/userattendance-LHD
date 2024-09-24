import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { GiQueenCrown } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false); // State for AddUserDetails

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserOpen(!isUserOpen);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
    setIsOpen(false);
    setIsUserOpen(false); // Close user details submenu
    closeSidebar(); // Close the sidebar when a link is clicked
  };

  return (
    <div
      className={`flex flex-col h-screen bg-secondary text-primary ${
        isCollapsed ? "items-center w-18" : "w-64"
      } transition-width border-r border-gray-400 sm:w-64`}
      style={{
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex text-2xl font-bold gap-2 m-2">
        <img
          src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
          alt="Profile"
          className="rounded-full w-8 h-8"
        />
        <span>LHD LTD</span>
      </div>
      <Link to={"profile"} className="mt-4 flex flex-col items-center" onClick={handleLinkClick}>
        <img
          src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
          alt="Profile"
          className="rounded-full w-20 h-20"
        />
        <div className="flex flex-col mt-2 gap-2 text-center ">
          <div className="font-semibold">Faisal Khan</div>
          <div className="text-sm text-primary bg-secondary shadow-md hover:shadow-lg hover:shadow-primary px-4 py-2 rounded-md">
            Web Developer
          </div>
        </div>
      </Link>
      <div className="flex flex-col mt-5 border-t-2 border-secondary">
        <div className="pt-5 hover:text-black">
          <SidebarItem
            Icon={MdOutlineDashboard}
            label="Dashboard"
            isCollapsed={isCollapsed}
            link={"/dashboard"}
            onClick={handleLinkClick}
          />
        </div>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-between w-full p-4 text-secondary rounded-lg focus:outline-none"
          >
            <FaRegCalendarCheck />
            <span>Attendance</span>
            <GiQueenCrown className="text-secondary" />
          </button>

          {isOpen && (
            <div className="flex flex-col mt-2 bg-secondary text-primary rounded-lg shadow-lg">
              <Link
                to={"attendance"}
                className="flex justify-center gap-5 items-center p-4 hover:text-secondary hover:bg-primary"
                onClick={handleLinkClick}
              >
                <IoIosPerson className="font-semibold text-[1.5rem]" />
                My Attendance
                <GiQueenCrown className="text-secondary" />
              </Link>
              <Link
                to={"mark-attendance"}
                className="flex justify-center gap-5 items-center p-4 hover:text-secondary hover:bg-primary"
                onClick={handleLinkClick}
              >
                <IoCheckmarkDoneCircleOutline className="font-semibold text-[1.5rem]" />
                Mark Attendance
                <GiQueenCrown className="text-secondary" />
              </Link>
            </div>
          )}
        </div>

        {/* AddUserDetails Section */}
        {/* AddUserDetails Section */}
<div className="relative">
  <button
    onClick={toggleUserMenu}
    className="flex items-center justify-between w-full p-4 text-secondary rounded-lg focus:outline-none"
  >
    <IoIosPerson />
    <span>Add Employee Details</span>
    <GiQueenCrown className="text-secondary" />
  </button>

  {isUserOpen && (
    <div className="flex flex-col mt-2 bg-secondary text-primary rounded-lg shadow-lg">
      <Link
        to="/add-employee" // Link to add user page
        className="flex justify-center gap-5 items-center p-4 hover:text-secondary hover:bg-primary"
        onClick={handleLinkClick}
      >
        <IoIosPerson className="font-semibold text-[1.5rem]" />
        Add User
      </Link>
      <Link
        to={"view-user"} // Link to view user page
        className="flex justify-center gap-5 items-center p-4 hover:text-secondary hover:bg-primary"
        onClick={handleLinkClick}
      >
        <IoCheckmarkDoneCircleOutline className="font-semibold text-[1.5rem]" />
        View User
      </Link>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

const SidebarItem = ({ Icon, label, isCollapsed, link, onClick }) => (
  <Link
    to={link}
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-3 hover:bg-primary hover:text-secondary text-secondary cursor-pointer"
  >
    <Icon className="text-xl" />
    {!isCollapsed && <span>{label}</span>}
  </Link>
);

export default Sidebar;
