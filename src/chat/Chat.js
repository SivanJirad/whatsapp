import { useLocation } from "react-router-dom";
import ChatList from "./ChatList";
import './chat.css'


function Chat(){
    const {state} = useLocation();

    return(
<div className="container center-chats">
  <div className="row">

    <div className="col-md-4 overflow-auto" id="leftMenu">



    <div className="top-row ">
      
  <i class="bi bi-person-plus"></i>
    </div>



            {<ChatList contacts={state.contacts}/>}

  
    </div>
    <div className="col-md-8" id ="chats">
    <div className="top-row"></div>

  </div>
</div>
</div>
    );
}
export default Chat

// 