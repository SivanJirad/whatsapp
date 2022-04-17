
import './message.css'


function MessageBox(props) {

    let className = "alert message ".concat(props.item.sentByMe ? 'alert-success send' : 'alert-warning recieve');


        const chekTypeMassage = function () {
            if (props.item.type === 'text') {
                return <span className={className}>
                    <div>{props.item.message}</div>
                   <div>{props.item.date.toLocaleString()}</div>
                </span>
                
            }
            else if (props.item.type === 'image') {
                return <span className={className}>
                    <div><img src={props.item.message} className="sizeImage"></img></div>
                    <div>{props.item.date.toLocaleString()}</div>
                    </span>
            }
            else if (props.item.type === 'video') {
                return <span className={className}>
                    <div><video controls src={props.item.message} className="sizeImage"></video></div>
                    <div>{props.item.date.toLocaleString()}</div>

                    </span>
            }
            else if(props.item.type === 'audio'){
                return <span className={className}>
                <div > <audio className='my-audio' controls src={props.item.message}> </audio></div>
                <div>{props.item.date.toLocaleString()}</div>
                </span>
            }
            else if(props.item.type === 'file'){
                return <span className={className}>
                <div > 
                <iframe src={props.item.message} className='sizeImage'> </iframe> </div>
                <div>{props.item.date.toLocaleString()}</div>
                </span>
            }
            }
            

    return (
        <div className="textBox">{chekTypeMassage()}</div>
    );

}

export default MessageBox;



