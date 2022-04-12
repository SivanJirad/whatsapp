import ChatItem from "./ChatItem";
import { React, useEffect, useState } from 'react';
// import { contacts } from '../Users';
import avatar from './avatar.png' 
import AddContact from "./AddContact";

function ChatList(props){

    
    const [contacts, setContact] = useState(props.contacts);

    const [nickName, setNickName] = useState("");


    const addContact = function (event) {
        event.preventDefault();
        let loadedChannels = []
        loadedChannels.push({name: nickName, message:[]})
        setContact([...contacts, {name: nickName, message:[]}])
    }


    // useEffect(() => {

    //     contact.map((item)=> <ChatItem contact={item}/>)
    // }, [contact]);






    return(

        <div>

        <div  className="top-row list-group-item d-flex align-items-center">
        <img src={avatar} alt="Avatar" className="avatar"></img>
        <span className="w-100 m-2 ms-3 nameContact" >sics</span> 
            <i className="bi bi-person-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">User Name</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={event => setNickName(event.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addContact}>Add</button>
  
                        </div>
                    </div> 
                </div>
            </div>

        </div>
        <div className="list-group list-group-flush">
            { contacts.map((item)=> <ChatItem contact={item}/>) }
        </div> 

        </div>
        );
}
export default ChatList
