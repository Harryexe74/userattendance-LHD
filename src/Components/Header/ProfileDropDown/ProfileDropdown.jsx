import React, { useState } from "react";
import { IoIosArrowDown, IoMdColorPalette } from "react-icons/io";
import { LuShieldAlert } from "react-icons/lu";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center bg-primary text-secondary px-4 py-2 rounded-md shadow-md hover:shadow-lg"
        >
          <img
            src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
            alt="Profile"
            className="rounded-full w-8 h-8 mr-2"
          />
          Faisal Khan
          <IoIosArrowDown className="ml-2" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-72 rounded-md shadow-lg bg-primary text-secondary">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img
                src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
                alt="Profile"
                className="rounded-full w-10 h-10 mr-3"
              />
              <div>
                <p className="text-[.9rem] font-semibold">Faisal Khan</p>
                <p className="text-sm">Web Developer</p>
              </div>
            </div>
            <Link
              to={"/profile"}
              className="bg-transparent border border-secondary hover:shadow-lg px-2 text-secondary mt-2 py-1 rounded-md"
            >
              Profile
            </Link>
          </div>

          <div className="border-t border-secondary">
            <div className="flex items-center justify-between px-4 py-3 hover:shadow-md rounded-lg cursor-pointer">
              <div className="flex gap-1 items-center">
                <IoMdColorPalette className="text-2xl" />
                <span className="font-semibold">Theme</span>
                <span className="bg-secondary text-primary text-xs py-0.5 px-1 font-semibold rounded-lg">BETA</span>
              </div>
              <IoIosArrowDown className="ml-2" />
            </div>

            <Link
              to={"profilepassword"}
              className="flex items-center gap-2 px-4 py-3 hover:shadow-md rounded-lg cursor-pointer"
            >
              <LuShieldAlert className="text-2xl" />
              <span className="font-semibold">Change password</span>
            </Link>
            <Link
              to={"/"}
              className="flex items-center gap-2 px-4 py-3 hover:shadow-md rounded-lg cursor-pointer"
            >
              <RiLogoutBoxRLine className="text-2xl" />
              <span>Log out</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
