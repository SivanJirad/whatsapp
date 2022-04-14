import { useLocation } from "react-router-dom";
import ChatList from "./ChatList";
import {useEffect, useState} from 'react';
import AddContact from './AddContact'
import SendMessage from "./SendMessage";
import './chat.css'
import UserTextBox from './UserTextBox'
import {users} from '../Users'


function Chat() {
  const { state } = useLocation();

  let user = users[state];
  console.log('users', users)
  console.log('state', state)
  console.log('users[state]', users[state])

  {console.log("chat user " ,user)}     

  console.log(state)

  console.log(users)
  let [contact, setContact] = useState(user.contacts);

  const [messages, setMessage] = useState([])
  const [userChatPrassed, setUserChatPrassed] = useState(null);

  // props.setUser({userName: contact.userName , messages: contact.messages});

// console.log(state.contacts)

  return (
    <div className="container center-chats">
      <div className="row">

        <div className="col-md-4" id="leftMenu">


        <AddContact setContact={setContact} userName={user.userName}/>

          <div className="scroll">
            {<ChatList contacts={contact} setUser={setUserChatPrassed} setMessages = {setMessage}/>}
          </div>
        </div>  
        <div className="col-md-8" id="chats">
        { userChatPrassed !== null && <UserTextBox item={userChatPrassed} userName={user.userName} messages = {messages} setMessages = {setMessage} contact = {contact} arrContact = {user.contacts}/>}  
        {/* {console.log(userChatPrassed)} */}

        {userChatPrassed !== null && <div className="top-row"></div>}
          <div>   
        </div>
        </div>
      </div>
    </div>
  );
}
export default Chat
