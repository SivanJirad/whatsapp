import { useLocation } from "react-router-dom";
import ChatItem from "./ChatItem";  
import ChatList from "./ChatList";



function Chat(){
    const {state} = useLocation();
    return(
        <div class="container">
        {<ChatList contacts={state.contacts}/>}
    <div className="col-md-4">

    </div>
    <div  className="col-md-7">right</div>
  </div>

    );
}
export default Chat