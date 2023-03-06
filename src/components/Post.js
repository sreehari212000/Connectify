import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import "../css/post.css"
import InputOption from './InputOption'

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { ChatOutlined, SendOutlined, ShareOutlined } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



const Post = forwardRef(({name, description, message, photoUrl}, ref) =>{
  return (
    <div ref={ref} className='post'>
        <div className="post-header">
            <div className='post-information'>
            <Avatar src={photoUrl}>{description[0].toUpperCase()}</Avatar> 
            <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
            <MoreHorizIcon />
        </div>

        <div className="post-body">
            <p>{message} </p>
        </div>

        <div className="post-buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatOutlined} title='Comment' color='gray'/>
            <InputOption Icon={ShareOutlined} title='Share' color='gray'/>
            <InputOption Icon={SendOutlined} title='Send' color='gray'/>
        </div>
    </div>
  )
})

export default Post