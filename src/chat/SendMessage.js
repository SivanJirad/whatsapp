import { useRef } from 'react';
import './chat.css'

function SendMessage(props){

  let input = useRef()


  const setNewMessage= function(){
      let mes= input.current.value
      props.setMessage((prev)=>{return prev.concat({message: mes, sentByMe:true})})
      // props.setMessageReciever((prev)=>{return prev.concat({message: mes, sentByMe:false})})
      input.current.value = ''
  }

  const checkIfEnter = function(event){
      if(event.key === 'Enter')
        setNewMessage();
  }


    return(

<div className="down-row d-flex align-items-center">
<i className="bi bi-paperclip"></i>

  <input type="text" id='TypingMessage' className="form-control shadow-none m-4 ms-3" placeholder="Typing a message" aria-label="Typing a message" 
  ref={input} onKeyDown= {checkIfEnter}></input>
  <bottun type="submit" onClick={setNewMessage}  > <i className="bi bi-send"  ></i> </bottun>


</div>
        );
}
export default SendMessage
