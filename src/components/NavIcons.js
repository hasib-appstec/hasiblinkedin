import React from 'react'
import "./NavIcon.css"
import {Avatar} from '@mui/material'
const NavIcons = ({avatar, Icon, title}) => {
  return (
    <div className='navIcon'>
      {Icon && <Icon className="navIcon-icon" />}
      {avatar && <Avatar className='navIcon-icon' />}
      <h3 className='navIcon-title'>{title}</h3>
    </div>
  )
}

export default NavIcons