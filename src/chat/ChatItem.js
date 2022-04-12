import './chat.css'
import avatar from './avatar.png' 
import SendMessage from "./SendMessage";
import UserMessage from "./UserMessage";
import { useState, useEffect } from 'react';

// export let userChatPrassed = null

function ChatItem(props) {


    const [userChatPrassed, setUserChatPrassed] = useState();

    let pressedChat = false;

    // useEffect(() => {
    //     console.log("yesss")
    //     userChatPrassed !== null &&  <SendMessage/>
    //   }, [userChatPrassed]);
    

    const goToMethod = function(){
        console.log("im in")
        setUserChatPrassed({userName: props.contact.name , message: props.contact.message});
        console.log(userChatPrassed)
        // props.contact.message.map((item)=> <SendMessage></SendMessage>)
    }

    console.log(props)


    return (
        
      
            <button type="button" className="list-group-item list-group-item-action d-flex align-items-center" onClick={goToMethod}>
            <img src={avatar} alt="Avatar" className="avatar"></img>
            
            <span className="w-100 m-2 ms-3 nameContact" >{props.contact.name}</span> 
            
       
            <span className="badge bg-primary rounded-pill">14</span>

            {pressedChat == true ? <UserMessage></UserMessage> : null}
            </button>

        

      




// <li className="list-group-item d-flex align-items-center">
// <i className="bi bi-house-fill"></i>
// <span className="w-100 m-2 ms-3">Homes</span>
// <span className="badge bg-primary rounded-pill">14</span>
// </li>





    );
}

export default ChatItem