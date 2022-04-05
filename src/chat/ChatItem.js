import './chat.css'


function ChatItem(props){
    return(
     <div className="contact btn btn-light border border-dark">
         {props.contact.name}
     </div>
    );
}

export default ChatItem