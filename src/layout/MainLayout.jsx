import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar';
const MainLayout = () => {
  return (
    <div className="mainLayout" >
      <Navbar/>
      <main className="mainSection">
        <div className="mainBody" >
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default MainLayout
