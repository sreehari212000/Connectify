import './css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from "./features/userSlice"
import Login from './components/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Widjets from './components/Widjets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
          dispatch(login({
            email: currentUser.email,
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoUrl: currentUser.photoURL
          }))
        }else{
          dispatch(logout())
        }
    })

    return ()=>{
      unsub()
    }

  }, [])

  return (
    <div className="app">

      {/* header */}
      <Header />
      {!user ? (<Login />): (
        <div className="app-body">
        <Sidebar />
        <Feed />
        <Widjets />
      </div>
      )}
    </div>
  );
}

export default App;
