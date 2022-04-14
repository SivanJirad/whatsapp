import { useState } from 'react';
import { Popover, Button, OverlayTrigger} from 'react-bootstrap';
import "./windowPop.css"
import AttachImage from './AttachImage'
import AttachVideo from './AttachVideo';
import AttachAudio from './AttachAudio';
function WindowPop(props){

    const popoverTop = (
      <Popover id="popover-positioned-top" title="Popover top">
        <AttachImage/>
        <AttachVideo/>
        <AttachAudio/>

      </Popover>
    );



    return(
<div>

<OverlayTrigger trigger="click" placement="top" overlay={popoverTop} rootClose>
      <Button> <i className="bi bi-paperclip"></i></Button>
    </OverlayTrigger>


      </div>

        );
}
export default WindowPop