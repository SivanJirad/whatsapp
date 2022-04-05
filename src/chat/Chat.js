import { useLocation } from "react-router-dom";
import ChatItem from "./ChatItem";  
import ChatList from "./ChatList";
import './chat.css'



function Chat(){
    const {state} = useLocation();
    return(
    <div class="container">
    <div class="row align-items-start">
    <div id="col1">
      {<ChatList contacts={state.contacts}/>}

    </div>
    <div  className="col2"></div>
    </div>

  </div>

    );
}
export default Chat