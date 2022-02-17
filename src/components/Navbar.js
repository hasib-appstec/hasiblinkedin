import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import WorkIcon from '@mui/icons-material/Work';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import {Avatar} from '@mui/material';
import "./Navbar.css"
import logo from "../Assets/logo.png"
import NavIcons from './NavIcons';
import Feed from "./Feed"
// import {Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Icons from './Icons';


const Navbar = () => {
  let navigate = useNavigate();
  const logout = () => {
    navigate("/")
  }

  return (
    <>
      <div className='header'>
        <div className="header-left">
          <img className="header-image" src={logo} alt="" />
          <div className="header-search">
            <SearchIcon />
            <input type="search" placeholder='search' />
          </div>
        </div>
        <div className="header-right">
          <NavIcons Icon={HomeIcon} title='Home' />
          < NavIcons Icon={SupervisorAccountIcon} title="My Network" />
          < NavIcons Icon={WorkIcon} title="Jobs" />
          <NavIcons Icon={CommentIcon} title="Message" />
          <NavIcons Icon={NotificationsRoundedIcon} title="Notification" />
          <div onClick={logout}>< NavIcons avatar={true} title="me" /></div>

          {/* <Icons /> */}
        </div>


      </div>

      <div className='feedPage'>
        <Feed />
      </div>
    </>


  )
}

export default Navbar