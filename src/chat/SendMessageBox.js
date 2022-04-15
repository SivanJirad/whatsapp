
import './message.css'
import avatar from './avatar.png' 


function SendMessageBox(props) {

const chekTypeMassage = function(){
    if (props.item.type == 'text') {
        return <span className="alert alert-success recieve-message send">{props.item.message}</span>
    }
    else if (props.item.type == 'image') {
        return <span className="alert alert-success recieve-message send">{<img src={props.item.message} className="sizeImage"></img>}</span>
    }
}

    return(
        
        <div className="textBox">{chekTypeMassage()}</div>
    );



}

export default SendMessageBox;



