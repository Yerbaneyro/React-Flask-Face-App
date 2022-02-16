import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

const AddUser = () => {
const webcamRef = React.useRef(null);
const videoConstraints = {
    width : 200,
    height : 200,
    facingMode: 'user'
};
const[name, setName] = useState('')
const [userName, setUserName] = useState('You did not provide a name...');

useEffect(() => console.log(userName), [userName]);

function NameInput(e) {
    setUserName(e.target.value)
}

const capture = React.useCallback(
() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`)
    console.log(userName)
                //for deployment, you should put your backend url / api
    axios.post('http://127.0.0.1:5000/api', {data : imageSrc, add : 'yes', userName : userName})
        .then(res => {
        console.log(`response = ${res.data}`)
        setName(res.data)
    })
        .catch(error => {
        console.log(`error = ${error}`)
    })
}, 
[webcamRef, userName]
);

    return (
        <div>
            <Webcam
            audio = {false}
            height = {300}
            ref = {webcamRef}
            screenshotFormat = "image/jpeg"
            width = {350}
            videoConstraints = {videoConstraints}
            />
            <h2>{name}</h2>
            <br />
            <p>Write yor name and smile It will be added with your name to data base and you will be able to authorise youself on the homepage.</p>
            <form>
                <label>Enter your name:
                    <input
                    type="text" 
                    value={userName}
                    onChange={NameInput}
                    />
                </label>
            </form>
            <button onClick={capture}>Add me!</button>
        </div>
    );

};

export default AddUser;