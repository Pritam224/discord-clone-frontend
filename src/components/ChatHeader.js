import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';
import { EditLocationRounded, PeopleAltRounded } from '@material-ui/icons'
import { SearchRounded } from '@mui/icons-material';


function ChatHeader() {
  return (
    <div className='chatHeader'>
        <div className='chatHeader__left'>
            <h3>
                <span className='chatHeader__hash'>#</span>
                Test Channel Name
            </h3>
        </div>

        <div className='chatHeader__right'>
            <NotificationsIcon/>
            <EditLocationRounded/>
            <PeopleAltRounded/>

            <div className='chatHeader__search'>
                <input placeholder = 'Search'/>
                <SearchRounded/>
            </div>

            <SendIcon/>
            <HelpIcon/>
        </div>
    </div>
  )
}

export default ChatHeader 