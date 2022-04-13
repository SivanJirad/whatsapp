import './message.css'


function RecieveMessageBox(props) {

    return(
        
        <div className="textBox">
            <span className="alert alert-warning recieve-message"> {props.item}</span>

        </div>
    );



}

export default RecieveMessageBox;