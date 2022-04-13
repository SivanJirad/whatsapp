import SendMessage from "./SendMessage";
import './chat.css'
import avatar from './avatar.png' 
import SendMessageBox from './SendMessageBox.js'
import RecieveMessageBox from './RecieveMessageBox.js'

import './message.css'
import { useState } from "react";




function UserTextBox(props){


    const [messages, setMessage] = useState(props.item.messages)
    

    return(
        <div className="message-scroll">

        <div  className="top-row list-group-item d-flex align-items-center">
        <img src={avatar} alt="Avatar" className="avatar"></img>
        <span className="w-100 m-2 ms-3 nameContact" >{props.item.userName}</span> 
    
        </div>
        <div className="scroll">

        { messages.map((item)=> item.sentByMe ? <SendMessageBox item={item.message}/> : <RecieveMessageBox item={item.message}/> )}
        </div>
    
        
        <div>
        {<SendMessage setMessage={setMessage}/>}
    
        </div>
    
        </div>



    );

}


export default UserTextBox