import { useLocation } from "react-router-dom";
import ChatList from "./ChatList";
import {useEffect, useState} from 'react';
import AddContact from './AddContact'
import SendMessage from "./SendMessage";
import './chat.css'
import UserTextBox from './UserTextBox'


function Chat() {
  const { state } = useLocation();


  const [userChatPrassed, setUserChatPrassed] = useState(null);

console.log(state.contacts)

  return (
    <div className="container center-chats">
      <div className="row">

        <div className="col-md-4" id="leftMenu">


            {/* <AddContact arrayContacts={state.contacts}/> */}

          <div className="scroll">
            {<ChatList contacts={state.contacts} setUser={setUserChatPrassed} />}
          </div>
        </div>  
        <div className="col-md-8" id="chats">
        { userChatPrassed !== null && <UserTextBox item={userChatPrassed}/>}       

        {userChatPrassed !== null && <div className="top-row"></div>}
          <div>   
        </div>
        </div>
      </div>
    </div>
  );
}
export default Chat

