import ChatItem from "./ChatItem";

function ChatList(props){
    return(
<div className="leftMenu">
{props.contacts.map((item)=> <ChatItem contact={item}/>)}
</div>
    );
}
export default ChatList
