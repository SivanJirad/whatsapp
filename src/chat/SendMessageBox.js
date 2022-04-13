import './message.css'


function SendMessageBox(props) {

    return(
        
        <div className="textBox">
            <span className="alert alert-success send-message"> {props.item}</span>
        </div>
    );



}

export default SendMessageBox;



