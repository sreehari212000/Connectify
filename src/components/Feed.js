import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "../css/feed.css"
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from "../firebase"
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import {selectUser} from "../features/userSlice"
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([])
  const [inputValue, setInputValue] = useState('')
  const user = useSelector(selectUser)

  useEffect(()=>{
    const q = query(collection(db, 'posts') , orderBy('timestamp', 'desc'))
    onSnapshot(q ,(snapshot)=>{
      setPosts(
        snapshot.docs.map((doc)=>(
          {
            id: doc.id,
            data: doc.data()
          }
        ))
      )
    })
  }, [])

  async function sendPost(e){
    e.preventDefault()
    await addDoc(collection(db, 'posts'),{
      name: user.displayName,
      desciption: user.email,
      message: inputValue,
      photoUrl: user.photoURL || '',
      timestamp: serverTimestamp()
    })

    setInputValue('')

  }

  return (
    <div className='feed'>
        <div className="feed-inputcontainer">
            <div className="feed-input">
                <CreateIcon />
                <form action="" onSubmit={sendPost}>
                    <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                </form>
            </div>
            <div className="feed-inputoptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7fc15e'/>
            </div>
        </div>

        {/* posts section */}
        <FlipMove>
          {posts.map((post)=>{
            const {id} = post
            const {name, desciption, message, photoUrl} = post.data
            return (
              <Post name={name} description={desciption} message={message} key={id} photoURL={photoUrl}/>
            )
          })}
        </FlipMove>

    </div>
  )
}

export default Feed