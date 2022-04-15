
import { useRef } from "react";
import "./windowPop.css"
import {useEffect, useState} from 'react';

import React, { Component } from 'react';

function AttachImage(props) {

    let imageInput = useRef();
    let value;

    const uploadImage = (event) => {
        imageInput.current.click(event);

    }

    const send = (event) => {
        value = URL.createObjectURL(event.target.files[0]);
        console.log(value)
        let index1 = props.arrContact.findIndex(x => (x.userName === props.chatUser))
            // <img src={image} className="masage-image"></img>
            props.arrContact[index1].messages = [...props.arrContact[index1].messages,  {message: value , sentByMe: true, type: 'image'}]
            props.arrContactMessage.messages = [...props.arrContactMessage.messages,  {message: value , sentByMe: false, type: 'image'}]
            props.setMessage((prev)=>{
             return prev.concat({message: value, sentByMe:true , type: 'image'})
            }
             )
    };

    return (
        <div>
            <div className="mb-3">
            <input type="file" className="form-control form-control-imag  chooseImage" id="image" name="image" accept="image/png, image/jpeg" onChange={send} ref={imageInput}></input>

            </div>
            <div><i className="bi bi-image attchment-icon" onClick={uploadImage}></i></div>
        </div>

    );
}
export default AttachImage 