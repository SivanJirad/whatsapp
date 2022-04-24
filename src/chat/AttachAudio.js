import { useState, useRef, useEffect } from "react";
import "./windowPop.css"
import { Modal, Button } from "react-bootstrap";
import { wait } from "@testing-library/user-event/dist/utils";



function AttachAudio(props){


    const [startMic, setStartMic] = useState(true)




      const [stream, setStream] = useState({
        // access: false,
        recorder: null,
      });
    
      const [recording, setRecording] = useState({
        active: false,
        available: false,
        url: ""
      });

      const [stopMic, setStopMic] = useState(false)


    
      const chunks = useRef([]);

    
    function getAccess(){
        setStopMic(true)
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((mic) => {
            let mediaRecorder;
            try {
              mediaRecorder = new MediaRecorder(mic, {
                mimeType: "audio/webm"
              });
            } catch (err) {
              console.log(err);
            }
    
            const track = mediaRecorder.stream.getTracks()[0];
            track.onended = () => console.log("ended");
    
            mediaRecorder.onstart = function () {
              setRecording({
                active: true,
                available: false,
                url: ""
              });
            };
    
            mediaRecorder.ondataavailable = function (e) {
              chunks.current.push(e.data);
            };
    
            mediaRecorder.onstop = async function () {    
              const url = URL.createObjectURL(chunks.current[0]);
              chunks.current = [];
    
              setRecording({
                active: false,
                available: true,
                url:url
              });
              
              setStream({
                // access: true,
                recorder: null
            })

            // setStartMic(false);
            };
    
            setStream({
              // access: true,
              recorder: mediaRecorder
            });
          })
      }
      
    


      useEffect(() => {
        if(recording.available === true){
          const urlRecording = recording.url
          props.setNewMessage("audio", urlRecording)
          setRecording({
            active: false,
            available: false,
            url:null
          });
          setStopMic(false)
        }
      }, [recording.available]);


      
        return (
          <div className="margin-from-mic">

            <i onClick={getAccess} className="bi bi-mic mic-color attchment-icon" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="click me to record and than click again to send"></i>
            {stream.recorder!== null && !recording.active && stream.recorder.start()}
            {stopMic && <i onClick={() => stream.recorder.stop()} className="bi bi-mic attchment-icon" id="mic" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="click again to send"></i>}
            {/* <button onClick={() => stream.recorder.stop()}>Stop Recording</button> */}
            {/* {recording.available &&  sendMessage()} */}
         
          {/* <button onClick={getAccess}>Get Mic Access</button> */}
            {/* {props.status && recordingOff()} */}
          </div>

        
        );
}
export default AttachAudio