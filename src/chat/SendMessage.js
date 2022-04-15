import { useRef } from 'react';
import './chat.css'
import {users} from '../Users'
import WindowPop from './WindowPop';

function SendMessage(props){

  let input = useRef()


  const setNewMessage= function(){
    let mes= input.current.value
    input.current.value = ''
    let index1 = props.arrContact.findIndex(x => (x.userName === props.chatUser))
    props.arrContact[index1].messages = [...props.arrContact[index1].messages,  {message: mes , sentByMe: true}]
    props.arrContactMessage.messages = [...props.arrContactMessage.messages,  {message: mes , sentByMe: false}]
    props.setMessage((prev)=>{
     return prev.concat({message: mes, sentByMe:true})
    }
     )
  }

const checkIfEnter = function(event){
    if(event.key === 'Enter')
      setNewMessage();
}


    return(

      <div className="down-row d-flex align-items-center">

        <WindowPop setMessage = {props.setMessage} arrContactMessage={props.arrContactMessage} chatUser={props.chatUser} arrContact = {props.arrContact}/>

        <input type="text" id='TypingMessage' className="form-control shadow-none m-4 ms-3" placeholder="Typing a message" aria-label="Typing a message"
          ref={input} onKeyDown={checkIfEnter}></input>
        <i className="bi bi-send" onClick={setNewMessage}  ></i>


</div>
        );
}
export default SendMessage