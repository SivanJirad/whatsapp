import './message.css'


function RecieveMessageBox(props) {


    
const chekTypeMassage = function(){
    if (props.item.type == 'text') {
        return <span className="alert alert-warning recieve-message get">{props.item.message}</span>
    }
    else if (props.item.type == 'image') {
        return <span className="alert alert-warning recieve-message get">{<img src={props.item.message} className="sizeImage"></img>}</span>
    }
}

    return(
        
        <div className="textBox">{chekTypeMassage()}</div>
    );



}

export default RecieveMessageBox;