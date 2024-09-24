import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Header/Navbar";
import Sidebar from "../Components/SideBar/SideBar";
import { FaBars } from "react-icons/fa";
import ModelSideBar from "../Components/SideBar/ModelSideBar";

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dummy function to check if user is authenticated
  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken"); // Example: Check for token in localStorage
  };

  // Redirect to login if not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/" />; // Redirect to login form
  }

  return (
    <div
      style={{
        backgroundColor: "transparent",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/line-background-wave-gradient-template-design_483537-5082.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
      }}
      className="flex h-screen  "
    >
      {isSidebarOpen && <Sidebar />}
      <div className="flex flex-col flex-1">
        <header className="bg-transparent backdrop-blur-sm border-b-2 border-secondary text-primary p-3 flex justify-between">
          <button
            onClick={toggleSidebar}
            className="hidden lg:block text-secondary"
          >
            <FaBars />
          </button>
          <div className="block lg:hidden">
            <ModelSideBar />
          </div>
          <Navbar />
        </header>

        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
