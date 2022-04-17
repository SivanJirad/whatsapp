import './chat.css'
import { useState, useEffect } from 'react';

function ChatItem(props) {


    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
          setDate(new Date());
        }, 30000);
      });
    

    const goToMethod = function(){
        props.setMessages(props.contact.messages);
        props.setUser({userName: props.contact.userName, image: props.contact.image, messages: props.contact.messages});

    }

    const SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    MONTH = DAY * 30,
    YEAR = DAY * 365;

const getTimeAgoString = (timestamp) => {
    // console.log()
    const differance = date - timestamp,
        getElapsedString = (value, unit) => {
            const round = Math.round(differance / value);
            return `${round} ${unit}${round > 1
                ? 's'
                : ''} ago`;
        };
    if (differance < MINUTE) {
        return 'now';
    }
    if (differance < HOUR) {
        return getElapsedString(MINUTE, 'minute');
    }
    if (differance < DAY) {
        return getElapsedString(HOUR, 'hour');
    }
    if (differance < MONTH) {
        return getElapsedString(DAY, 'day');
    }
    if (differance < YEAR) {
        return getElapsedString(MONTH, 'month');
    }
    return getElapsedString(YEAR, 'year');
};

    return (
        
      
            <button type="button" className="list-group-item list-group-item-action d-flex align-items-center" onClick={goToMethod}>
            <img src={props.contact.image} alt="Avatar" className="avatar"></img>
            
            <span className="w-100 m-2 ms-3 nameContact" >
                <div>{props.contact.userName}</div>
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'text' && <div> {props.contact.messages[props.contact.messages.length-1].message}</div>} 
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'image' && <div> <i className="bi bi-image"></i> image</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'video' && <div> <i className="bi bi-camera-video"></i> video</div>}
                {props.contact.messages.length !== 0 && props.contact.messages[props.contact.messages.length-1].type === 'audio' && <div> <i className="bi bi-mic"></i> audio</div>}

            
            </span> 
            
            <span> {props.contact.messages.length !== 0  && getTimeAgoString(props.contact.messages[props.contact.messages.length-1].date)}   </span>
       
            {/* <span className="badge bg-primary rounded-pill">14</span> */}
            {/* </span> */}

           
            </button>

        

      




// <li className="list-group-item d-flex align-items-center">
// <i className="bi bi-house-fill"></i>
// <span className="w-100 m-2 ms-3">Homes</span>
// <span className="badge bg-primary rounded-pill">14</span>
// </li>





    );
}

export default ChatItem