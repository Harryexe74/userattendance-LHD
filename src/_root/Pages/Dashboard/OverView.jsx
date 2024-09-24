import React from "react";
import ReviewCard from "../../../Components/Cards/DashboardCard/ReviewCard";
import DealRevenue from "../../../Components/Cards/DashboardCard/DealRevenue";
import DashboardCharts from "./DashboardCharts";
import {
  HiMiniPresentationChartLine,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import { FcLeave } from "react-icons/fc";
import { IoAlertCircle } from "react-icons/io5";

const OverView = () => {
  return (
    <>
      <div className="flex items-center space-x-1 px-2 py-2">
        <div className="w-1 h-6 bg-secondary"></div>
        <h2 className=" px-2 py-1  text-[1rem] font-bold text-blue-500">
          Welcome Faisal Khan
        </h2>
      </div>

      <div className="my-3 grid grid-cols-2 md:grid-cols-4  gap-4">
        <ReviewCard
          title={"Total Days"}
          Count={30}
          icons={<HiOutlineCalendarDays />}
          bgColor="#228B22"
          iconsBg="#BAD3F0"
          textColor="#FFFFFF"
          iconColor="#103995"
        />

        <ReviewCard
          title={"Present Days"}
          Count={28}
          icons={<HiMiniPresentationChartLine />}
          bgColor="#6A5ACD"
          iconsBg="#BFE3F8"
          textColor="#FFFFF0"
          iconColor="#C0C0C0"
        />

        <ReviewCard
          title={"Absent Days"}
          Count={2}
          icons={<IoAlertCircle />}
          bgColor="#E67E22"
          iconsBg="#F6E8B7"
          textColor="#FFFFFF"
          iconColor="#FFD700"
        />

        <ReviewCard
          title={"Leave Days"}
          Count={1}
          icons={<FcLeave />}
          bgColor="#36454F"
          iconsBg="#FAD8CC"
          textColor="#F5F5F5"
          iconColor="#1ABC9C"
        />
      </div>

      <div>
        <DashboardCharts />
      </div>

      <div className="flex flex-col gap-3 my-4">
        <h1 className="text-[1rem] font-semibold text-secondary">
          UPCOMING MEETINGS
        </h1>
        <div>
          <button className="px-3 py-2 rounded-md bg-primary text-secondary bg-opacity-80 backdrop-filter hover:translate-y-1.2 text-sm">
            Nothing to show!
          </button>
        </div>
      </div>
    </>
  );
};

export default OverView;
