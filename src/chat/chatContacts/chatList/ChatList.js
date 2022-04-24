import ChatItem from "./ChatItem";
import { React, useEffect, useState } from 'react';


function ChatList(props){

    return(

        <div className="list-group list-group-flush">
            { props.contacts.map((item)=> <ChatItem key={item.userName} contact={item} setUser={props.setUser} setMessages = {props.setMessages}/>) }
        </div> 

        );
}
export default ChatList
