import { useState, useRef } from "react";
import "./windowPop.css"
import { Modal, Button } from "react-bootstrap";



function AttachAudio(props){



    const [audioDetails, setAudioDetails] = useState({
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      });
    
      const [fileBlob, setFileBlob] = useState(null);
    
      let items = [];
      const audioRef = useRef();
      let recorder;
    
      const startRecorde = () => {
        console.log("test");
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          recorder = new MediaRecorder(stream);
          recorder.ondataavailable = (e) => {
            items.push(e.data);
            if (recorder.state === "inactive") {
              console.log("inactive");
              let blob = new Blob(items, { type: "audio/webm" });
              audioRef.current.src = URL.createObjectURL(blob);
            }
          };
          recorder.start(10);
        });
      };
    
      const handleAudioStop = () => {
        recorder.stop();
      };
    
      const handleAudioUpload = () => {
        console.log(audioRef.current.src);
        console.log(fileBlob);
        let file = new File([...items], "file_name", {
          lastModified: 1534584790000
        });
    
        setFileBlob(file);
      };
    
      console.log(fileBlob);
      const handleReset = () => {
        items = [];
        audioRef.current.src = null;
      };



        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <div>
            {/* <Button onClick={handleShow}>
              Launch demo modal
            </Button> */}

            <i  onClick={handleShow} className="bi bi-mic attchment-icon"></i>
      
            <Modal show={show}>
              {/* <Modal.Header closeButton>
                <Modal.Title>Record</Modal.Title>
              </Modal.Header> */}
              <Modal.Body><audio ref={audioRef} controls={true} type="video.webm" />
      {/* <Button onClick={() => startRecorde()}>Start Rec </Button>
      <button onClick={() => handleAudioStop()}>stop Rec </button>
      <button onClick={() => handleReset()}>clear Rec </button>
      <button onClick={() => handleAudioUpload()}>upload Rec </button> */}
      <audio
        src={fileBlob ? URL.createObjectURL(fileBlob) : null}
        controls={true}/>
        </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" onClick={() => startRecorde()}> Start recording </Button>
              <Button variant="primary" onClick={() => handleAudioUpload()}>Upload recording </Button>
              <Button onClick={() => handleAudioStop()}>stop Rec </Button>
               <Button variant="primary" onClick={handleClose}> Close </Button>
              </Modal.Footer>
            </Modal>
          </div>

        



        // </div>

        );
}
export default AttachAudio