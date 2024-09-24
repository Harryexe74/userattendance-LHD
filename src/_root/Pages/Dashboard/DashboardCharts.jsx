// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import "chart.js/auto";

// const DashboardCharts = () => {
//   const donutData = {
//     labels: ["Present", "Absent", "Leave"],
//     datasets: [
//       {
//         data: [70, 20, 10], // Adjusted to include 'Leave' percentage
//         backgroundColor: ["#FF1493", "#D7ECFB", "#FFE7D9"], // Green, Red, Yellow

//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//       <div className="py-5 bg-[#cdbaba]   rounded-lg shadow-lg flex items-center justify-center">
//         <Doughnut data={donutData} />
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;

import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";

const DashboardCharts = () => {
  // Doughnut chart data
  const donutData = {
    labels: ["Present", "Absent", "Leave"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#1ABC9C", "#FF6F61", "#4169E1"],

        borderWidth: 0,
      },
    ],
  };

  // Bar chart data for progress (Days, Week, Month)
  const progressData = {
    labels: ["Days", "Week", "Month"],
    datasets: [
      {
        label: "Progress",
        data: [50, 75, 100],
        backgroundColor: ["#32CD32", "#00BFFF", "#FFC107"],

        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom sizing
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Set max value to 100 for percentage
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 ">
      {/* Progress Bar Chart */}
      <div className="col-span-1 md:col-span-4 bg-[#F0F0F0] bg-opacity-80 backdrop-filter rounded-lg shadow-lg flex items-center justify-center">
        {/* <h2 className="text-black font-bold px-4 py-2">Progress</h2> */}
        <div className="w-full h-80">
          <Bar data={progressData} options={barOptions} />
        </div>
      </div>
      {/* Doughnut Chart */}
      <div className="col-span-2 md:col-span-2 bg-[#F0F0F0]  bg-opacity-80 backdrop-filter rounded-lg shadow-lg flex items-center justify-center">
        {/* <h2 className="text-black font-bold px-4 py-2">Attendance</h2> */}
        <div className="w-full h-80 flex justify-center items-center py-5">
          <Doughnut data={donutData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
