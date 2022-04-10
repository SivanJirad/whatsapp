import ChatItem from "./ChatItem";

function ChatList(props){
    return(




<div class="list-group list-group-flush">
{
props.contacts.map((item)=> <ChatItem contact={item}/>)
}

</div> 




        );
}
export default ChatList
