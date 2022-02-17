import {Avatar} from '@mui/material'
import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div>

      <div className="sidebar-top">
        <img src="" alt="" />
        <Avatar className='sidebar-avatar' />
        <h3>Hasib</h3>
        <h5>hansari@appstec-me.com</h5>

        <div className="sidebar-stats">
          <p>Who viewed your profile</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar