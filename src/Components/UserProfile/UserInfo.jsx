import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAttachEmail, MdPersonAddAlt } from "react-icons/md";

const UserInfo = () => {
  const [profileImage, setProfileImage] = useState("/mnt/data/fg.PNG"); // Default image path

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" bg-opacity-80 rounded-lg  text-white text-center">
      <div className="border-b-2 border-pink-500  py-3 mb-4">
        <h2 className="text-[1rem] font-semibold  text-white">User Account</h2>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center ">
        <div className="relative w-24 h-24 ">
          <img
            src={profileImage}
            alt="User Profile"
            className="w-full h-full rounded-full object-cover"
          />
          <label
            htmlFor="imageUpload"
            className="absolute right-0 bottom-0 cursor-pointer"
          >
            <FaPlusCircle className="text-pink-500 text-xl" />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div>
          <h3 className="text-[1rem] font-bold">Faisal Khan</h3>
          <p className="text-sm ">Web Developer</p>
        </div>
        <div>
          <div className="flex items-center ">
            <span className="text-sm mr-2">
              <FiPhone />
            </span>
            <p className="text-sm font-semibold">Contact number</p>
          </div>
          <p className="text-sm ">+92--------------</p>
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-sm mr-2">
              <MdOutlineAttachEmail />
            </span>
            <p className="text-sm font-semibold">Email Address</p>
          </div>
          <p className="text-sm ">khan012@mail.com</p>
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-[1rem] mr-2">
              <MdPersonAddAlt />
            </span>
            <p className="text-sm font-semibold">Profile Created on</p>
          </div>
          <p className="text-sm ">October 03, 2022, 3:21 PM</p>
        </div>

        <button className="bg-[#16A34A] w-full text-white text-[1rem] rounded-md py-1 font-semibold text-center">
          ACTIVE
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
