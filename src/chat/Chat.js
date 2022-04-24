import { useLocation } from "react-router-dom";
import ChatList from "./ChatList";
import {useEffect, useState} from 'react';
import AddContact from './AddContact'
import SendMessage from "./SendMessage";
import './chat.css'
import UserTextBox from './UserTextBox'
import {users} from '../Users'
import welcome from './welcome.jpg' 

import NameContact from './NameContact'
function Chat() {


  const { state } = useLocation();
  let user = users[state.index];
  let [contact, setContact] = useState(user.contacts);
  const [messages, setMessage] = useState([])
  const [userChatPrassed, setUserChatPrassed] = useState(null);

  const getArrOfUserContact = function(){
      let index1 = users.findIndex(x => (x.userName ===  userChatPrassed.userName))
      let index2 = users[index1].contacts.findIndex(x => (x.userName ===  user.userName))
      if(index2===-1){
        users[index1].contacts= [...users[index1].contacts,{userName: user.userName, nickName:user.nickName, image:user.image, messages:[] }]
        index2=users[index1].contacts.length-1
      }
      return users[index1].contacts[index2];
  }


  return (
    <div className="container center-chats">
      <div className="row">

        <div className="col-sm-4" id="leftMenu">
        <AddContact setContact={setContact} userName={user.nickName} existContacts={user.contacts}  indexOfMe = {state.index} image ={user.image}/>

          <div className="scroll">
            {<ChatList contacts={contact} setUser={setUserChatPrassed} setMessages = {setMessage}/>}
          </div>
        </div>  
        <div className="col-sm-8" id="chats">
        {userChatPrassed === null && <img src={welcome} className="welcome"></img>}
        
        {userChatPrassed !== null && <NameContact item={userChatPrassed}/>}
        <div className="message-scroll">
        { userChatPrassed !== null && <UserTextBox messages = {messages}/>}  
      </div>
      <div>   

        {userChatPrassed !== null && <SendMessage arrContactMessage={getArrOfUserContact()} setMessage={setMessage} myUser={user.nickName} chatUser={userChatPrassed.userName} arrContact={user.contacts} roll={roll} />}
        </div>
        </div>
      </div>
    </div>
  );
}
export default Chat
