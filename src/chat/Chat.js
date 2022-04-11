import { useLocation } from "react-router-dom";
import ChatList from "./ChatList";
import {useState} from 'react';
import AddContact from './AddContact'
import SendMassage from "./SendMassage";
import './chat.css'


function Chat() {
  const { state } = useLocation();

  let [contact, setContact] = useState(state.contacts);


  return (
    <div className="container center-chats">
      <div className="row">

        <div className="col-md-4" id="leftMenu">

          <div className="top-row ">

            <AddContact/>


          </div>

          <div className="scroll">
            {<ChatList contacts={contact} />}
          </div>
        </div>  
        <div className="col-md-8" id="chats">
          <div className="top-row"></div>
          <div>          <SendMassage/>
</div>
        </div>
      </div>
    </div>
  );
}
export default Chat

// 