import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import { FiUserPlus } from 'react-icons/fi';
import { AiOutlineRollback } from 'react-icons/ai';
import { RiUser6Line } from 'react-icons/ri';

const AddUser = ({setCurrentPage}) => {
const webcamRef = React.useRef(null);
const videoConstraints = {
    width : 200,
    height : 200,
    facingMode: 'user'
};
const[name, setName] = useState('')
const [userName, setUserName] = useState('');

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
    axios.post('https://reactfaceapp.azurewebsites.net/api', {data : imageSrc, add : 'yes', userName : userName})
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
            <RiUser6Line className="template"/>
            <Webcam
            audio = {false}
            height = {400}
            ref = {webcamRef}
            screenshotFormat = "image/jpeg"
            width = {500}
            videoConstraints = {videoConstraints}
            />
            <h2 className='status'>{name}</h2>
            <form>
                <label>Enter your name:
                    <input 
                    className='input'
                    type="text" 
                    value={userName}
                    onChange={NameInput}
                    />
                </label>
            </form>
            <div className='add-buttons'>
                <button className='add-new-user' onClick={capture}><FiUserPlus className='icon'/>Add me!</button>
                <button className='back' onClick={() => setCurrentPage('Home')}> <AiOutlineRollback className='icon'/> Back</button>
            </div>
        </div>
    );

};

export default AddUser;