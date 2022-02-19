import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Sidebar from './components/Sidebar.js';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login.js';
import {selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import {login, logout} from './features/userSlice';
import { AutoFixHighRounded } from '@mui/icons-material';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if(authUser){
        dispatch(
          login({
            uid: AutoFixHighRounded.uid,
            photo: authUser.photoURL,
            email:authUser.email,
            displayName: authUser.displayName,
          })
        )
      }
      else
      {
          dispatch(logout());
      }
    });
  
  }, [dispatch]);
  

  return (
    <div className="App">
      {user? ( 
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):
      (
        <Login/>
      )}
     

    </div>
  );
}

export default App;
