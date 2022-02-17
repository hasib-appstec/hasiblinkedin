import React from 'react'
import "./Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {useNavigate} from 'react-router-dom';
const Icons = () => {
  let navigate = useNavigate();
  const logout = () => {
    navigate("/")
  }
  return (
    <div className="navIcon">
      <HomeIcon onClick={logout} className="navIcon-icon" /><h3 className='navIcon-title'>Home</h3>
      <CommentIcon /> <h3>Message</h3>
      <SupervisorAccountIcon />Group
      <NotificationsRoundedIcon />Notification
      <WorkIcon avatar={true} />
      <AccountCircleRoundedIcon />
    </div>
  )
}

export default Icons