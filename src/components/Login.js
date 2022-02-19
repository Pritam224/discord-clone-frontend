import React from 'react';
import './Login.css';
import Img from '../discord.png';
import Button from '@mui/material/Button';
import { auth, provider} from '../firebase';
import { signInWithPopup } from "firebase/auth";

const signInWithGoogle = () =>{
  signInWithPopup(auth, provider)
  .catch((error) => {
      console.log(error);
  });
}

const Login = ()=> {
  return (
    <div className='login'>
      <div className='login__logo'>
        <img src = {Img} className = 'img'/>
      </div>
      <Button onClick = {signInWithGoogle}>Sign In</Button>
    </div>
  )
}

export default Login