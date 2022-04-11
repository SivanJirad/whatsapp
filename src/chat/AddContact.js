import './chat.css'
import { React, useEffect, useState } from 'react';
import { contacts } from '../Users';

function ChatItem() {


    const [nickName, setNickName] = useState("");


    const addContact = function (event) {
        event.preventDefault();
        contacts.push({nickName: nickName, massage:"g"});
        }
    





    return (
        <div >
            <i class="bi bi-person-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Contact</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Nick Name</label>
                                    <input type="text" class="form-control" id="recipient-name" onChange={event => setNickName(event.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">Close</button>
                            {/* אין תנאי שבודק את האיש קשר שהוכנס    */}
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={addContact}>Add</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default ChatItem