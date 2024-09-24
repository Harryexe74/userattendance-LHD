import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Sidebar from "./SideBar";

const ModelSideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer(true)}
        className="flex items-center justify-center py-4 bg-cover"
      >
        <FaBars />
      </button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          style={{ width: 250 }}
        >
          <Sidebar closeSidebar={toggleDrawer(false)} />
        </div>
      </Drawer>
    </div>
  );
};

export default ModelSideBar;
