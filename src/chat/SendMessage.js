import './chat.css'

function SendMessage(props){
    return(

<div className="down-row d-flex align-items-center">
{props.userName}
<i className="bi bi-paperclip"></i>

<input type="text" id='TypingMessage' className="form-control shadow-none m-4 ms-3" placeholder="Typing a message" aria-label="Typing a message" ></input>
  <i className="bi bi-send"></i>

</div>
        );
}
export default SendMessage