import React from 'react';
import './Chat.css';
import Message from './Message.js';
import ChatHeader from './ChatHeader.js';
import AddIcon from '@mui/icons-material/Add';
import { EmojiEmotions } from '@material-ui/icons';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';

function Chat() {
  return (
    <div className='chat'>
        <ChatHeader/>

        <div className='chat__messages'>
          <Message />
          <Message />
          <Message />
        </div>

        <div className='chat__input'>
          <AddIcon/>
          <form>
            <input placeholder = {`Message #TESTCHANNEL`} type = "text"/>
            <button className = "chat__inputButton" type='submit'>
              Send Message
            </button>
          </form>

          <div className='chat__inputIcons'>
            <CardGiftcardIcon fontSize = "large" />
            <GifIcon fontSize = "large" />
            <EmojiEmotions fontSize='large'/>
          </div>
        </div>
    </div>
  )
}

export default Chat;

