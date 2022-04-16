
import './message.css'


function MessageBox(props) {

    let className = "alert recieve-message ".concat(props.item.sentByMe ? 'alert-success send' : 'alert-warning recive');


        const chekTypeMassage = function () {
            if (props.item.type == 'text') {
                return <span className={className}>{props.item.message}</span>
            }
            else if (props.item.type == 'image') {
                return <span className={className}>{<img src={props.item.message} className="sizeImage"></img>}</span>
            }
        }

    return (

        <div className="textBox">{chekTypeMassage()}</div>
    );



}

export default MessageBox;



