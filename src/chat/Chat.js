import { useLocation } from "react-router-dom";
import ChatList from "./ChatList";
import {useEffect, useState} from 'react';
import AddContact from './AddContact'
import SendMessage from "./SendMessage";
import './chat.css'
import UserTextBox from './UserTextBox'
import {users} from '../Users'

import NameContact from './NameContact'
function Chat() {


  const { state } = useLocation();
  let user = users[state.index];
  let [contact, setContact] = useState(user.contacts);
  const [messages, setMessage] = useState([])
  const [userChatPrassed, setUserChatPrassed] = useState(null);

  const getArrOfUserContact = function(){
    //מוצא את האינדקס של האיש קשר במערך של המשתמשים
    //הבעיה שלא הוספנו את המשתמש החדש כאיש קשר ליתר המשתמשים
      let index1 = users.findIndex(x => (x.userName ===  userChatPrassed.userName))
      let index2 = users[index1].contacts.findIndex(x => (x.userName ===  user.userName))
      //המשתמש החדש לא קיים כאיש קשר אצל האיש קשר שאליו שלח הודעה
      if(index2===-1){
        users[index1].contacts= [...users[index1].contacts,{userName: user.userName,nickName:user.nickName, image:user.image, messages:[] }]
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

        {userChatPrassed !== null && <NameContact item={userChatPrassed}/>}
        { userChatPrassed !== null && <UserTextBox messages = {messages}/>}  
        <div>   

        {userChatPrassed !== null && <SendMessage arrContactMessage={getArrOfUserContact()} setMessage={setMessage} myUser={user.nickName} chatUser={userChatPrassed.userName} arrContact={user.contacts} />}
        </div>
        </div>
      </div>
    </div>
  );
}
export default Chat
