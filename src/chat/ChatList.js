import ChatItem from "./ChatItem";
import { React, useEffect, useState } from 'react';
// import { contacts } from '../Users';
import avatar from './avatar.png' 
import AddContact from "./AddContact";

function ChatList(props){

    
    const [contacts, setContact] = useState(props.contacts);

    const [userName, setUserName] = useState("");


    // const addContact = function (event) {
    //     event.preventDefault();
        
    //     setContact([...contacts, {userName: userName, messages:[]}])
    // }




    return(

        <div>

        <div>
            <AddContact setContact={setContact} userName={props.userName}/>

        </div>
        <div className="list-group list-group-flush">
            { contacts.map((item)=> <ChatItem contact={item} setUser={props.setUser}/>) }
        </div> 

        </div>
        );
}
export default ChatList