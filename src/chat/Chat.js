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
  console.log(state.index)
  let user = users[state.index];
  let [contact, setContact] = useState(user.contacts);
  const [messages, setMessage] = useState([])
  const [userChatPrassed, setUserChatPrassed] = useState(null);

  // props.setUser({userName: contact.userName , messages: contact.messages});

// console.log(state.contacts)


  const getArrOfUserContact = function(){
    
      let index1 = users.findIndex(x => (x.userName ===  userChatPrassed.userName))
      let index2 = users[index1].contacts.findIndex(x => (x.userName ===  user.userName))

      return users[index1].contacts[index2];
  }


  return (
    <div className="container center-chats">
      <div className="row">

        <div className="col-md-4" id="leftMenu">


        <AddContact setContact={setContact} userName={user.userName} existContacts={user.contacts}  indexOfMe = {state}/>

          <div className="scroll">
            {<ChatList contacts={contact} setUser={setUserChatPrassed} setMessages = {setMessage}/>}
          </div>
        </div>  
        <div className="col-md-8" id="chats">

        { userChatPrassed !== null && <UserTextBox arrContactMessage={getArrOfUserContact()} item={userChatPrassed} userName={user.userName} messages = {messages} setMessages = {setMessage} arrContact = {user.contacts}/>}  
        {userChatPrassed !== null && <div className="top-row"></div>}
          <div>   
        </div>
        </div>
      </div>
    </div>
  );
}
export default Chat
