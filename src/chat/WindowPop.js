import { useState } from 'react';
import { Popover, Button, OverlayTrigger} from 'react-bootstrap';
import "./windowPop.css"
import AttachImage from './AttachImage'
import AttachVideo from './AttachVideo';
import AttachAudio from './AttachAudio';
function WindowPop(props){

    const popoverTop = (
      <Popover id="popover-positioned-top" title="Popover top">
                <AttachImage setMessage = {props.setMessage} arrContactMessage={props.arrContactMessage} chatUser={props.chatUser} arrContact = {props.arrContact}/>

       <AttachVideo/>
        <AttachAudio/>

      </Popover>
    );


return(
<div>

<OverlayTrigger trigger="click" placement="top" overlay={popoverTop} rootClose>
      <i className="bi bi-paperclip" ></i>
    </OverlayTrigger>
      </div>

        );
}
export default WindowPop