import ChatItem from "./ChatItem";

function ChatList(props){
    return(
<div>
{props.contacts.map((item)=> <ChatItem contact={item}/>)}
</div>
    );
}
export default ChatList
