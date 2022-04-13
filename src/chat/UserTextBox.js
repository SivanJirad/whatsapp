import SendMessage from "./SendMessage";
import './chat.css'
import avatar from './avatar.png' 
import SendMessageBox from './SendMessageBox.js'
import RecieveMessageBox from './RecieveMessageBox.js'
import './message.css'
import { useEffect, useState } from "react";


function UserTextBox(props){


    useEffect(() => {
        // Update the document title using the browser API
        setMessage(props.item.messages)
      }, [props.item.messages]);



    const [messages, setMessage] = useState(props.item.messages)

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     props.item.messages = messages
    //   }, [messages]);
    
      console.log(props.item)
    return(
        <div>

        <div  className="top-row list-group-item d-flex align-items-center">
        <img src={avatar} alt="Avatar" className="avatar"></img>
        <span className="w-100 m-2 ms-3 nameContact" >{props.item.userName}</span> 
    
        </div>
        <div className="message-scroll">
        { messages.map((item)=> item.sentByMe ? <SendMessageBox item={item.message}/> : <RecieveMessageBox item={item.message}/> )}
        </div>
    
        
        <div>
        {<SendMessage setMessage={setMessage} myUser={props.userName} chatUser={props.item.userName} messages={messages} />}
    
        </div>
    
        </div>



    );

}


export default UserTextBox