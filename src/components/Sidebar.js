import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {selectUser} from "../features/userSlice"
import "../css/sidebar.css"

function Sidebar() {

    const user = useSelector(selectUser)
    const {displayName, email, photoURL } = user

    function recentItem(topic){
        return(
        <div className="sidebar-recentitem">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
        )
    }

  return (
    <div className='sidebar'>


        <div className="sidebar-top">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20200701/pngtree-abstract-polygonal-geometric-background-image_340628.jpg" alt="" />
            <Avatar src={photoURL} className='sidebar-avatar'>{email[0].toUpperCase()}</Avatar>
            <h2>{displayName}</h2>
            <h4>{email}</h4>
        </div>
        
        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who viewed you</p>
                <p className="sidebar-statnumber">2,453</p>
            </div>
            <div className="sidebar-stat">
                <p>Views on Post</p>
                <p className="sidebar-statnumber">1,283</p>             
            </div>
        </div>


        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem('chatgpt')}
            {recentItem('frontenddevelopment')}
            {recentItem('softwareengineering')}
            {recentItem('reactjs')}

        </div>

    </div>
  )
}

export default Sidebar 