import { Avatar } from '@mui/material';
import React from 'react'
import './Message.css';

function Message() {
  return (
    <div className='message'>
        <Avatar/>
        <div className='message__info'>
            <h4>
                pritam
                <span className='message__timestamp'>this is a message timestamp</span>
            </h4>

            <p>This is a message</p>
        </div>
    </div>
  )
}

export default Message