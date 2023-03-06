import React, { useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../firebase"
import "../css/login.css"
import { useDispatch } from 'react-redux'
import {login} from "../features/userSlice"
import Logo from "../Assets/Connectify.png"

const Login = () => {
    const [email ,setEmail] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()


    const register = async ()=>{
        if(!name){
            alert('Please enter a name!')
            return
        }
        try{
        const userAuth = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(userAuth.user, {
            displayName: name,
            photoURL: profilePic
        })
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic
        }))
        }catch(e){
            alert(e.message)
        }
    }


    const loginToApp = async(e)=>{
        e.preventDefault()
        try{
        const userAuth = await signInWithEmailAndPassword(auth, email, password)
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL
        }))
        }
        catch(e){
            alert(e)
        }
    }
  return (
    <div className='login'>
        <img src={Logo} alt="Connectify" />

        <form>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Full Name(required if registering)'/>
            <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} type="text" placeholder='Profile pic url'/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required  placeholder='Email'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required  placeholder='Password'/>
            <button onClick={loginToApp} type='submit'>Sign In</button>
        </form>
        <p>Not a member?
            <span onClick={register} className='login-register'> Register Now!</span>
        </p>
    </div>
  )
}

export default Login