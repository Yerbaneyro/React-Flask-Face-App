import React, {Component, useState} from 'react';
import AddUser from './components/addUser.js';
import WebcamCapture from './components/webcam.js';
import './App.css';
import { FiUserPlus } from 'react-icons/fi';

import { MdWeb } from 'react-icons/md'
import { AiFillFileText, AiFillGithub, AiOutlineHome } from 'react-icons/ai';
import { FcWebcam } from 'react-icons/fc'
import Read_Me from './components/readme.js';

function App() {

    const [currentPage, setCurrentPage] = useState('Home');

    if(currentPage=='AddUser'){
      return (
        <div className='main-containers'>
          <div className='side-panel'>
            <h1><FcWebcam className='logo' /> MyFace</h1>
            <h2 className='header-capction'>User Authorisation by Face Recognition</h2>
            <nav className='navigation-bar'>
              <button className='addUser' onClick={() => setCurrentPage('Home')}> <AiOutlineHome className='icon'/> Home</button>
              <button className='addUser' onClick={() => setCurrentPage('ReadMe')}> <AiFillFileText className='icon'/> Read.me</button>
              <button className='addUser' onClick={() => setCurrentPage('AddUser')}> <AiFillGithub className='icon'/> GitHub</button>
              <button className='addUser' onClick={() => setCurrentPage('AddUser')}> <MdWeb className='icon'/> mbednarz.website</button>
            </nav>
            <p>This is a Demo app that allows recognizing users by their faces. To start using that create your profile in the "Add New User" tab. If you do not want to create a new profile you can open pictures of following persons on your phone and show them to the camera: </p>
            <ul>
              <li>Harry Potter</li>
              <li>Syrius Black</li>
              <li>Linus Torvalds</li>
              <li>Myself</li>
            </ul>

            <p className='alert'>First authorization could take a bit of time, due to the low quality of the back-end server. It is just free hosting so please understand and be patient.</p>

            <p>For authorisation just press "Authorisation" button.</p>
          
          </div>
          <div className='container'>
          <div className='head'>
              
            </div>
          <AddUser setCurrentPage={setCurrentPage}/>
        </div>
      </div>
      )
    }

    if(currentPage=='Home'){
      return (
        <div className='main-containers'>
          <div className='side-panel'>
            <h1><FcWebcam className='logo' /> MyFace</h1>
            <h2 className='header-capction'>User Authorisation by Face Recognition</h2>
            <nav className='navigation-bar'>
              <button className='addUser' onClick={() => setCurrentPage('AddUser')}> <FiUserPlus className='icon'/> Add New User</button>
              <button className='addUser' onClick={() => setCurrentPage('Readme')}> <AiFillFileText className='icon'/> Read.me</button>
              <a href='https://github.com/Yerbaneyro/React-Flask-Face-App' target="_blank"><button className='addUser'> <AiFillGithub className='icon'/> GitHub</button></a>
              <a href='https://mbednarz.website/' target="_blank"><button className='addUser'> <MdWeb className='icon'/> mbednarz.website</button></a>
            </nav>
            <p>This is a Demo app that allows recognizing users by their faces. To start using that create your profile in the "Add New User" tab. If you do not want to create a new profile you can open pictures of following persons on your phone and show them to the camera: </p>
            <ul>
              <li>Harry Potter</li>
              <li>Syrius Black</li>
              <li>Linus Torvalds</li>
              <li>Myself</li>
            </ul>

            <p className='alert'>First authorization could take a bit of time, due to the low quality of the back-end server. It is just free hosting so please understand and be patient.</p>

            <p>For authorisation just press "Authorisation" button.</p>
          
          </div>
          <div className='container'>
            <div className='head'>
              
            </div>
            <WebcamCapture />
          </div>
        </div>
      )
    }

    return (
      <div className='main-containers'>
          <div className='side-panel'>
            <h1><FcWebcam className='logo' /> MyFace</h1>
            <h2 className='header-capction'>User Authorisation by Face Recognition</h2>
            <nav className='navigation-bar'>
              <button className='addUser' onClick={() => setCurrentPage('Home')}> <AiOutlineHome className='icon'/> Home</button>
              <button className='addUser' onClick={() => setCurrentPage('Readme')}> <AiFillFileText className='icon'/> Read.me</button>
              <a href='https://github.com/Yerbaneyro/React-Flask-Face-App' target="_blank"><button className='addUser'> <AiFillGithub className='icon'/> GitHub</button></a>
              <a href='https://mbednarz.website/' target="_blank"><button className='addUser'> <MdWeb className='icon'/> mbednarz.website</button></a>
            </nav>
            <p>This is a Demo app that allows recognizing users by their faces. To start using that create your profile in the "Add New User" tab. If you do not want to create a new profile you can open pictures of following persons on your phone and show them to the camera: </p>
            <ul>
              <li>Harry Potter</li>
              <li>Syrius Black</li>
              <li>Linus Torvalds</li>
              <li>Myself</li>
            </ul>

            <p className='alert'>First authorization could take a bit of time, due to the low quality of the back-end server. It is just free hosting so please understand and be patient.</p>

            <p>For authorisation just press "Authorisation" button.</p>
          
          </div>
          <div className='container'>
            <div className='head'>
              
            </div>
            <Read_Me />
          </div>
        </div>
    )
  }



export default App;
