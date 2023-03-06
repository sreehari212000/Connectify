import React, { useState } from 'react'
import '../css/header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import {logout } from "../features/userSlice"
import {signOut} from "firebase/auth"
import {auth} from "../firebase"
import logo from "../Assets/logo.png"
import MyModal from './Modal';

function Header() {
  const dispatch = useDispatch()

  const [openmodal, setOpenmodal] = useState(false)

  function handleUnavailableFunctionality(){
    setOpenmodal(true)
  }

  async function logoutOfApp(){
    dispatch(logout())
    await signOut(auth)
  }

  return (
    <div className='header'>
        <div className="header-left">
            <img src={logo} alt="" />

            <div className="search-bar">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>


        <div className="header-right">
            <div onClick={handleUnavailableFunctionality}><HeaderOption title='Home' Icon={HomeIcon}/></div>
            <div onClick={handleUnavailableFunctionality}><HeaderOption title='My Network' Icon={SupervisorAccountIcon} /></div>
            <div onClick={handleUnavailableFunctionality}><HeaderOption title='Jobs' Icon={BusinessCenterIcon}/></div>
            <div onClick={handleUnavailableFunctionality}><HeaderOption title='Messages' Icon={ChatIcon}/></div>
            <div onClick={handleUnavailableFunctionality}><HeaderOption title='Notification' Icon={NotificationsIcon}/></div>
            <div onClick={logoutOfApp}>
            <HeaderOption title='me' avatar/>
            </div>
        </div>
        {openmodal && <MyModal openmodal={openmodal} setOpenmodal={setOpenmodal}/>}
    </div>
  )
}

export default Header