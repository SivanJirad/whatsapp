import SendMessage from "./SendMessage";
import './chat.css'
import avatar from './avatar.png' 
import SendMessageBox from './SendMessageBox.js'
import RecieveMessageBox from './RecieveMessageBox.js'
import './message.css'
import { useEffect, useState } from "react";


function UserTextBox(props){
    

    
    return(
        <div>

        <div  className="top-row list-group-item d-flex align-items-center">
        <img src={avatar} alt="Avatar" className="avatar"></img>
        <span className="w-100 m-2 ms-3 nameContact" >{props.item.userName}</span> 
    
        </div>
        <div className="message-scroll">
        { props.messages.map((item)=> item.sentByMe ? <SendMessageBox item={item}/> : <RecieveMessageBox item={item}/> )}
        </div>
        
        <div>
        {<SendMessage arrContactMessage={props.arrContactMessage} setMessage={props.setMessages} myUser={props.userName} chatUser={props.item.userName} arrContact = {props.arrContact}/>}
        

        </div>
    
        </div>



    );

}


export default UserTextBox