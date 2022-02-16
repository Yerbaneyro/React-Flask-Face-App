import React, {Component, useState} from 'react';
import Webcam from 'react-webcam';
import AddUser from './components/addUser.js';
import WebcamCapture from './components/webcam.js';
import './App.css';

function App() {

    const [currentPage, setCurrentPage] = useState('Home');

    if(currentPage=='AddUser'){
      return (
        <div>
        <div className='head'>
          <h2>Authorisation with Face Recognition</h2>
        </div>
        <AddUser />
        <button onClick={() => setCurrentPage('Home')}>Back</button>
      </div>
      )
    }

    if(currentPage=='Home'){
      return (
        <div>
        <div className='head'>
          <h2>Authorisation with Face Recognition</h2>
        </div>
        <WebcamCapture />
        <button onClick={() => setCurrentPage('AddUser')}>Add User</button>
      </div>
      )
    }

    return (
      <div>
        <div className='head'>
          <h2>Authorisation with Face Recognition</h2>
        </div>
        <WebcamCapture />
        <button onClick={() => setCurrentPage('AddUser')}>Add User</button>
      </div>
      )
  }



export default App;
