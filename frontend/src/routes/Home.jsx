import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

const Home = () => {
  // Toggle the state of the sidebar
  const [sidebarActive, setsidebarActive ] = useState(false)


  const togglesidebar = () => setsidebarActive((a => !a))

  return (
    <>
    <Sidebar sidebarActive={sidebarActive} togglesidebar={togglesidebar} />
    <div id="main" className={ ` ${ sidebarActive ? 'active' : '' } ` }>
        <TopNav togglesidebar={togglesidebar} />
        <Outlet />
    </div>
    </>
  )
}

export default Home
