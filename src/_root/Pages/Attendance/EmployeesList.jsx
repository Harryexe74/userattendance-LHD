import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { BsToggleOn, BsToggleOff } from "react-icons/bs"; // On/Off icons

const EmployeesList = () => {
  const [data, setData] = useState([
    {
      id: "1",
      img: "https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg",
      name: "Faisal Khan",
      position: "Web Developer",
      joiningdate: "1/June/2024",
      reason: "",
      status: "Active",
    },
  ]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [reason, setReason] = useState("");

  // Toggle icon state for each row
  const [toggleState, setToggleState] = useState({});

  const openModal = (rowIndex) => {
    setSelectedRow(rowIndex);
    setIsModalOpen(true);
    setReason(data[rowIndex].reason); // Set the existing reason in the modal input
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    if (selectedRow !== null) {
      const updatedData = [...data];
      updatedData[selectedRow].reason = reason; // Update reason in the specific row
      setData(updatedData);
    }
    closeModal();
  };

  const handleToggle = (rowIndex) => {
    setToggleState((prevState) => ({
      ...prevState,
      [rowIndex]: !prevState[rowIndex],
    }));

    if (!toggleState[rowIndex]) {
      openModal(rowIndex); // Open modal when toggled on
    }
  };

  return (
    <>
      {/* Main Content */}
      <div className="h-90 w-full bg-gray-200 rounded-lg shadow-lg flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[1rem] font-semibold p-2 text-pink-500">
            Employees List
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-auto scrollbar-custom max-h-72">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr>
                {[
                  "ID",
                  "Image",
                  "Name",
                  "Position",
                  "Joining Date",
                  "Reason",
                  "Status",
                ].map((header) => (
                  <th
                    key={header}
                    className="p-4 text-[.8rem] font-semibold bg-pink-500 text-white text-left whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((row, index) => (
                  <tr
                    key={index}
                    className="text-[.8rem] bg-gray-300 cursor-pointer hover:bg-[#F5F5F5]  text-nowrap"
                  >
                    <td className="p-4 border-t  hover:border-pink-400 hover:border border-gray-200">
                      {row.id}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      <img
                        src={row.img}
                        alt="img"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.name}
                    </td>
                    <td className="p-4  hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.position}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.joiningdate}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      {row.reason || "Active"}
                    </td>
                    <td className="p-4 hover:border-pink-400 hover:border border-t border-gray-200">
                      <button
                        onClick={() => handleToggle(index)}
                        className="text-pink-500 hover:text-pink-700  text-[2rem] font-semibold"
                      >
                        {toggleState[index] ? (
                          <BsToggleOn className="text-gray-500" />
                        ) : (
                          <BsToggleOff className="text-green-500" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="11"
                    className="py-4 text-center text-[.7rem] text-gray-200 border-t border-gray-200"
                  >
                    No rows
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center m-4">
          <span className="text-sm pr-5">0-0 of 0</span>
          <button className="mx-2 p-1 text-[.8rem] bg-gray-200 rounded hover:bg-gray-300">
            <FaLessThan />
          </button>
          <button className="p-1 text-[.8rem] bg-gray-200 rounded hover:bg-gray-300">
            <FaGreaterThan />
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-white rounded-lg w-2/3 max-w-lg p-6 relative">
              <button
                className="absolute top-2 text-[1.5rem] font-semibold right-2 text-pink-600 hover:text-gray-800"
                onClick={closeModal}
              >
                <MdCancel />
              </button>
              <div className="flex flex-col justify-center items-center">
                <div className="text-pink-600 text-[3rem]">
                  <IoMdAlert />
                </div>
                <h2 className="ml-3 text-xl font-semibold">
                  Enter Late Reason
                </h2>
              </div>
              <div className="mt-4">
                <label className="block">
                  <input
                    type="text"
                    placeholder="Enter reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-pink-500 focus:border-pink-500"
                  />
                </label>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleConfirm}
                  className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700"
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .scrollbar-custom::-webkit-scrollbar {
            height: 5px;
            width: 5px;
          }

          .scrollbar-custom::-webkit-scrollbar-thumb {
            background-color: #e94196;
            border-radius: 10px;
          }

          .scrollbar-custom::-webkit-scrollbar-track {
            background-color: #f1f1f1;
          }
        `}</style>
      </div>
    </>
  );
};

export default EmployeesList;
