import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import { FcApproval, FcCancel } from 'react-icons/fc'
import { Oval } from 'react-loader-spinner';

const WebcamCapture = () => {
const webcamRef = React.useRef(null);
const videoConstraints = {
    width : 200,
    height : 200,
    facingMode: 'user'
};
const[name, setName] = useState('')
const[icon, setIcon] = useState('')

const capture = React.useCallback(
() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setIcon(<div className='loading-icon'><Oval color="rgb(49, 85, 185)" height={40} width={40} /></div>)
    setName("Loading");
    console.log(`imageSrc = ${imageSrc}`)
    axios.post('https://reactfaceapp.azurewebsites.net/api', {data : imageSrc, add : 'no'})
        .then(res => {
        console.log(`response = ${res.data}`)
        setName(res.data)
        if(res.data != 'Unauthoirsed') {
            setIcon(<FcApproval />)
        }else {
            setIcon(<FcCancel />)
        }
    })
        .catch(error => {
        console.log(`error = ${error}`)
    })
}, 
[webcamRef]
);

return (
<div>
    <Webcam
    audio = {false}
    height = {400}
    ref = {webcamRef}
    screenshotFormat = "image/jpeg"
    width = {500}
    videoConstraints = {videoConstraints}
    />
    <div className='status-container'>
        <h3 className='status'>{name} <span className='authorisation-icon'>{icon}</span></h3>
    </div>
    <button className='authorisation' onClick={capture}>Authorisation</button>
</div>
    );

};

export default WebcamCapture;