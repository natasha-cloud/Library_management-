import React from "react";
import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

const Root = () => {
  // Toggle the state of the sidebar
  const [sidebarActive, setsidebarActive] = useState(false);

  const navigation = useNavigation();


  const togglesidebar = () => setsidebarActive((a) => !a);

  return (
    <>
     
     <div>
          <Sidebar
            sidebarActive={sidebarActive}
            togglesidebar={togglesidebar}
          />
          <div id="main" className={` ${sidebarActive ? "active" : ""} `}>
            <TopNav togglesidebar={togglesidebar} />
            <Outlet/>
          </div>
        </div>
    </>
  );
};

export default Root;
