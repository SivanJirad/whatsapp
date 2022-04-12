import { useLocation } from "react-router-dom";
import ChatList from "./ChatList";
import {useEffect, useState} from 'react';
import AddContact from './AddContact'
import SendMessage from "./SendMessage";
import './chat.css'
import ChatItem, {userChatPrassed} from './ChatItem'


function Chat() {
  const { state } = useLocation();

  // useEffect(() => {
  //   console.log(userChatPrassed)
  //   userChatPrassed !== null &&  <SendMessage/>
  // }, [userChatPrassed]);

  // let [contact, setContact] = useState(state.contacts);

  console.log(ChatItem.userChatPrassed)
  return (
    <div className="container center-chats">
      <div className="row">

        <div className="col-md-4" id="leftMenu">


            {/* <AddContact arrayContacts={state.contacts}/> */}

          <div className="scroll">
            {<ChatList contacts={state.contacts} />}
          </div>
        </div>  
        <div className="col-md-8" id="chats">
          <div className="top-row">

       </div>
          <div>   
          { ChatItem.userChatPrassed !== null && <SendMessage item={ChatItem.userChatPrassed} />}       
        </div>
        </div>
      </div>
    </div>
  );
}
export default Chat

