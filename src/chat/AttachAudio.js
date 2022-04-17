import { useState, useRef } from "react";
import "./windowPop.css"
import { Modal, Button } from "react-bootstrap";



function AttachAudio(props){


      const [stream, setStream] = useState({
        access: false,
        recorder: null,
      });
    
      const [recording, setRecording] = useState({
        active: false,
        available: false,
        url: ""
      });

      const [stopMic, setStopMic] = useState(false)
    
      const chunks = useRef([]);
    
      function getAccess() {
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
                access: true,
                recorder: null
            })
            };
    
            setStream({
              access: true,
              recorder: mediaRecorder
            });
          })
      }


      const sendMessage = function() {
        props.setNewMessage("audio", recording.url)
        setRecording({
          active: false,
          available: false,
          url:null
        });
        setStopMic(false)
      }



        // const [show, setShow] = useState(false);

        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
      
        return (
          <div>
            {/* <Button onClick={handleShow}>
              Launch demo modal
            </Button> */}
{/* 
            <i  onClick={handleShow} className="bi bi-mic attchment-icon"></i>
      
            <Modal show={show}> */}
              {/* <Modal.Header closeButton>
                <Modal.Title>Record</Modal.Title>
              </Modal.Header> */}
              {/* <Modal.Body><audio ref={audioRef} controls={true} type="video.webm" /> */}
      {/* <Button onClick={() => startRecorde()}>Start Rec </Button>
      <button onClick={() => handleAudioStop()}>stop Rec </button>
      <button onClick={() => handleReset()}>clear Rec </button>
      <button onClick={() => handleAudioUpload()}>upload Rec </button> */}
      {/* <audio
        src={fileBlob ? URL.createObjectURL(fileBlob) : null}
        controls={true}/>
        </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" onClick={() => startRecorde()}> Start recording </Button>
              <Button variant="primary" onClick={() => handleAudioUpload()}>Upload recording </Button>
              <Button onClick={() => handleAudioStop()}>stop Rec </Button>
               <Button variant="primary" onClick={handleClose}> Close </Button>
              </Modal.Footer>
            </Modal> */}



            <i onClick={getAccess} className="bi bi-mic attchment-icon" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="click me to record and than click again to send"></i>
            {stream.recorder!== null && !recording.active && stream.recorder.start()}
            {stopMic && <i onClick={() => stream.recorder.stop()} className="bi bi-mic attchment-icon mic" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="click again to send"></i>}
            {/* <button onClick={() => stream.recorder.stop()}>Stop Recording</button> */}
            {recording.available &&  sendMessage()}
         
          {/* <button onClick={getAccess}>Get Mic Access</button> */}

          </div>

        
        );
}
export default AttachAudio