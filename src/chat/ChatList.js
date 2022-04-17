import ChatItem from "./ChatItem";
import { React, useEffect, useState } from 'react';
// import { contacts } from '../Users';
import avatar from './avatar.png' 
import AddContact from "./AddContact";

function ChatList(props){

    return(

        <div className="list-group list-group-flush">
            { props.contacts.map((item)=> <ChatItem contact={item} setUser={props.setUser} setMessages = {props.setMessages}/>) }
        </div> 

        );
}
export default ChatList