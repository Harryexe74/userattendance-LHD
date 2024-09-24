import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { MdCancel, MdModeEditOutline } from "react-icons/md";

const AttendanceTable = () => {
  const data = [
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },

    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },

    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
    {
      date: "2024-07-01",
      inTime: "9:00",
      inSource: "LHD",
      outTime: "5:00",
      outSource: "LHD",
      officeTime: "9:00",
      late: "-",
      extra: "15",
      noteReason: "-",
      deducted: "-",
    },
  ];
  // -----------------------------------Model----------------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirm = () => {
    // Handle confirmation logic
    closeModal();
  };
  return (
    <>
      {/* Main Content */}
      <div className="h-90 w-full bg-primary rounded-lg shadow-lg  flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[1rem] font-semibold p-2 text-secondary">
            Attendance Records
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-auto scrollbar-custom  max-h-72 ">
          <table className="min-w-full    border border-primary">
            <thead>
              <tr>
                {[
                  "Date",
                  "In-time",
                  "In-source",
                  "Out-time",
                  "Out-source",
                  "Office time",
                  "Late",
                  "Extra",
                  "Note/Reason",
                  "Deducted",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className="p-4 text-[.8rem] font-semibold bg-secondary text-primary text-left whitespace-nowrap"
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
                    className="text-[.8rem] bg-primary cursor-pointer hover:bg-lightblue text-center text-nowrap"
                  >
                    <td className="p-4 border-t hover:border-secondary hover:border-t  border-secondary">
                      {row.date}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t  border-secondary">
                      {row.inTime}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.inSource}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.outTime}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.outSource}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.officeTime}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.late}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.extra}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.noteReason}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      {row.deducted}
                    </td>
                    <td className="p-4 hover:border-secondary hover:border border-t border-secondary">
                      <button
                        onClick={openModal}
                        className="text-secondary  text-[1rem] font-semibold"
                      >
                        <MdModeEditOutline />
                      </button>
                    </td>
                    {/* ---------------Model--------------------------- */}
                    {isModalOpen && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
                        <div className="bg-white rounded-lg w-2/3 max-w-lg p-6 relative">
                          <button
                            className="absolute top-2 text-[1.5rem] font-semibold right-2 text-secondary hover:text-secondary"
                            onClick={closeModal}
                          >
                            <MdCancel />
                          </button>
                          <div className="flex flex-col justify-center items-center">
                            <div className="text-secondary text-[3rem]">
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
                                className="w-full border border-primary rounded-lg p-2 focus:outline-secondary focus:border-secondary"
                              />
                            </label>
                          </div>
                          <div className="flex justify-center mt-6">
                            <button
                              onClick={handleConfirm}
                              className="bg-secondary text-primary py-2 px-6 rounded-lg hover:bg-secondary"
                            >
                              CONFIRM
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* -------------------------------------------------- */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="11"
                    className="py-4 text-center text-[.7rem] text-gray-500 border-t border-gray-500"
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
          <span className=" text-sm pr-5">0-0 of 0</span>
          <button className="mx-2 p-1 text-[.8rem] bg-gray-200 rounded hover:bg-gray-300">
            <FaLessThan />
          </button>
          <button className="p-1 text-[.8rem] bg-gray-200 rounded hover:bg-gray-300">
            <FaGreaterThan />
          </button>
        </div>
        <style jsx>{`
          .scrollbar-custom::-webkit-scrollbar {
            height: 5px; /* Height for horizontal scrollbar */
            width: 5px; /* Width for vertical scrollbar */
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

export default AttendanceTable;