import './chat.css'
import { React, useEffect, useRef, useState } from 'react';
import { users } from '../Users';
import avatar from './avatar.png' 
import ChatList from './ChatList';

function AddContact(props) {

    let name = useRef();


    const addContact = function (event) {
        let contName = name.current.value;
        props.setContact((prev)=>{
            return prev.concat({userName: contName, messages:[]})
        })
            console.log(contName)
        name.current.value = ''
    }
    
 
    return (

        <div  className="top-row list-group-item d-flex align-items-center">
        <img src={avatar} alt="Avatar" className="avatar"></img>
        
        <span className="w-100 m-2 ms-3 nameContact" >{props.userName}</span> 

   
       
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
                                    <label htmlFor="recipient-name" className="col-form-label">Enter User Name</label>
                                    <input type="text" className="form-control" id="recipient-name" ref={name}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Close</button>
                            {/* אין תנאי שבודק את האיש קשר שהוכנס    */}
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addContact}>Add</button>
                            {/* <div className="scroll">
                             {<ChatList contacts={contact} />}
                         </div> */}
                        </div>
                    </div> 
                </div>
            </div>

        </div>


        
    );
}

export default AddContact

