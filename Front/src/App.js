import React, {Component, useState} from 'react';
import Webcam from 'react-webcam';
import AddUser from './components/addUser.js';
import WebcamCapture from './components/webcam.js';
import './App.css';
import { FiUserPlus } from 'react-icons/fi';
import { AiOutlineRollback } from 'react-icons/ai'

function App() {

    const [currentPage, setCurrentPage] = useState('Home');

    if(currentPage=='AddUser'){
      return (
        <div className='container'>
        <div className='head'>
          <h2>Authorisation with Face Recognition</h2>
        </div>
        <AddUser />
        <button className='addUser' onClick={() => setCurrentPage('Home')}> <AiOutlineRollback className='icon'/> Back</button>
      </div>
      )
    }

    if(currentPage=='Home'){
      return (
        <div className='container'>
          <div className='head'>
            <h2>Authorisation with Face Recognition</h2>
          </div>
          <WebcamCapture />
          <button className='addUser' onClick={() => setCurrentPage('AddUser')}> <FiUserPlus className='icon'/> Add User</button>
          <p className='description'>Click on Authorisation button or if you not registred add your progile by going to Add User</p>
        </div>
      )
    }

    return (
      <div className='container'>
        <div className='head'>
          <h2>Authorisation with Face Recognition</h2>
        </div>
        <WebcamCapture />
        <button className='addUser' onClick={() => setCurrentPage('AddUser')}>Add User</button>
      </div>
      )
  }



export default App;
