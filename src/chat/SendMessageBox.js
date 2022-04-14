
import './message.css'
import avatar from './avatar.png' 


function SendMessageBox(props) {

    return(
        
        <div className="textBox">
            <span className="alert alert-success recieve-message"> {props.item}</span>
              </div>
    );



}

export default SendMessageBox;



