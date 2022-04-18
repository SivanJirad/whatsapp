import SendMessage from "./SendMessage";
import './chat.css'
import './message.css'
import MessageBox from "./MessageBox.js"


function UserTextBox(props) {
    let messageNum = 0
    return (
        <div>

            <div className="top-row list-group-item d-flex align-items-center">
                <img src={props.item.image} alt="Avatar" className="avatar"></img>
                <span className="w-100 m-2 ms-3 nameContact chat-name" >{props.item.nickName}</span>

            </div>
            <div className="message-scroll textBox">
                {/* {props.messages.map((item) => item.sentByMe ? <SendMessageBox item={item} /> : <RecieveMessageBox item={item} />)} */}
                {props.messages.map((item) => <MessageBox key={messageNum++} item={item} />)}

            </div>

            <div>
                {<SendMessage arrContactMessage={props.arrContactMessage} setMessage={props.setMessages} myUser={props.userName} chatUser={props.item.userName} arrContact={props.arrContact} />}


            </div>

        </div>



    );

}


export default UserTextBox
