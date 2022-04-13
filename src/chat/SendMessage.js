import { useRef } from 'react';
import './chat.css'
import {users} from '../Users'

function SendMessage(props){

  let input = useRef()


  const setNewMessage= function(){
      let mes= input.current.value
      input.current.value = ''


      //props.messages.concat({message: mes, sentByMe:false})
      //return [...props.messages, {message: mes, sentByMe:true}]
      props.setMessage((prev)=>{return prev.concat({message: mes, sentByMe:true})})


      //props.setMessage( prev => {return [...prev, {message: mes, sentByMe:true}]})
      // props.setMessageReciever((prev)=>{return prev.concat({message: mes, sentByMe:false})})

   

      // for( let i=0; i<users.length; i++){
      //     if(users[i] === props.userName){
      //       for(let j=0 ; j< users[i].contacts.length; j++){
      //         if(users[i].contacts[j].userName === props.myUser){
      //           users[i].contacts[j].messages.push({message: mes, sentByMe:true})
      //         }
      //       }
      //     }
      // }

      console.log(users)




     // users.map((item)=> item.userName == props.myUser ? 


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
  <button type="submit" onClick={setNewMessage}  > <i className="bi bi-send"  ></i> </button>


</div>
        );
}
export default SendMessage