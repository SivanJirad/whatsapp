
import "./windowPop.css"
import { useRef } from "react";

import React, { Component } from 'react';

function AttachViedo(props){
      // delete me

        let videoInput = useRef();

        const uploaVideo = (event) => {
                videoInput.current.click(event);
        }
    
        const send = (event) => {
           let value = URL.createObjectURL(event.target.files[0]);
            props.setNewMessage("video", value)
    
        };


    return(

            <div>
                <div className="mb-3">
                <input type="file" className="form-control form-control-imag chooseImage" id="image" name="video" accept="video/*" onChange={send} ref={videoInput}></input>
                </div>
                <div><i className="bi bi-camera-reels attchment-icon" onClick={uploaVideo}></i></div>
            </div>
        );
}
export default AttachViedo