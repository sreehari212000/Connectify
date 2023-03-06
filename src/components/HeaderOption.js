import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import "../css/headerOption.css"
import { selectUser } from '../features/userSlice'

const HeaderOption = ({Icon, title, avatar}) => {
  const user = useSelector(selectUser)
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption-icon'/>}
        {avatar && <Avatar className='headerOption-icon' src={user?.photoURL}>{user?.email[0].toUpperCase()}</Avatar>}
        <h3 className='headerOption-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption