import './App.css';
import Navbar from './Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Experience from './pages/experience';
import Skills from './pages/skills';
import TicTacToe from './pages/playme';
import Education from './pages/education'
import Projects from './pages/projects'
import FilmDiary from './pages/film-diary'
import ButtonGroup from './ButtonGroup/ButtonGroup';
import MenuBtn from './Navbar/Buttons/menuBtn';
import CancelBtn from './Navbar/Buttons/cancelBtn'
import SpringIn from './Navbar/SpringIn';
import SpringOut from './Navbar/SpringOut'
import {useState } from 'react';
import OutsideAlerter from './ClickCheck/ClickChecker';
import BackgroundSelector from './BackgroundSelector';
import WindowListener from './WindowListener';
import React from 'react';
function App() {

  //Window Size
  const [resize, setResize] = useState(false)
  const [menuPressed, setMenuPressed] = useState(false)
  const [cancelPressed, setCancelPressed] = useState(false)
  WindowListener(resize, setResize, setMenuPressed)

  //Background
  BackgroundSelector()
 
  return (
    <>
      <div className="wrapper">
        <div className='enabled'>
          
          <div
            className="buttonGroup">
              <ButtonGroup />
          </div>
          <div className="parent">
            <Router>
            
                
                  {menuPressed && (
                    
                    <SpringIn>
                      <div className="nav_wrapper">
                      <OutsideAlerter setMenuPressed={setMenuPressed} setCancelPressed={setCancelPressed} resize={resize} menuPressed={menuPressed}>
                        <Navbar />
                      </OutsideAlerter>
                      </div>
                    </SpringIn>  
                  )}
                  {!resize && (
                    <div className="nav_wrapper">
                      <OutsideAlerter setMenuPressed={setMenuPressed} setCancelPressed={setCancelPressed} resize={resize} menuPressed={menuPressed}>
                        <Navbar />
                      </OutsideAlerter>
                    </div>
                  )}
                  {(cancelPressed && resize) && (
                    <SpringOut>
                      <div className="nav_wrapper">
                        <OutsideAlerter setMenuPressed={setMenuPressed} setCancelPressed={setCancelPressed} resize={resize} menuPressed={menuPressed}>
                          <Navbar />
                        </OutsideAlerter>
                      </div>
                    </SpringOut>  
                  )}
              
            <div className="menu_btn_wrapper" style={{display: (resize && !menuPressed)  ? ('inline') : 'none'}} >
              <MenuBtn setMenuPressed={setMenuPressed} setCancelPressed={setCancelPressed}/>              
            </div>
            
              {menuPressed && (
                  <div className="cancel_btn_wrapper">
                    <SpringIn className='spring_in'>
                     <CancelBtn setMenuPressed={setMenuPressed} setCancelPressed={setCancelPressed}/>
                    </SpringIn>
                  </div>
              )}   
               {(cancelPressed && resize) && (
                <div className="cancel_btn_wrapper">
                  <SpringOut className='spring_in'>
                    <CancelBtn setMenuPressed={setMenuPressed} setCancelPressed={setCancelPressed}/>
                  </SpringOut>
                </div>
              )}
            
              <div className='content_wrapper'>
              <Routes>
                
                <Route path='/' element={<Home/>} />
                <Route path='/aboutme' element={<Home/>} />
                <Route path='/experience' element={<Experience/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/education' element={<Education/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/playme' element={<TicTacToe/>} />
                <Route path='/film-diary' element={<FilmDiary/>} />
              </Routes>
              </div>
            </Router>  
          </div> 
        </div> 
      </div>
    </>  
  );
}
export default App;
