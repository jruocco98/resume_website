import './App.css';
import Navbar from './Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Experience from './pages/experience';
import Skills from './pages/skills';
import TicTacToe from './pages/playme';
import Education from './pages/education'
import Projects from './pages/projects'
import ButtonGroup from './ButtonGroup/ButtonGroup';
import MenuBtn from './Navbar/Buttons/menuBtn';
import CancelBtn from './Navbar/Buttons/cancelBtn'
import {useState } from 'react';
import OutsideAlerter from './ClickCheck/ClickChecker';
import BackgroundSelector from './BackgroundSelector';
import WindowListener from './WindowListener';
function App() {

  //Window Size
  const [resize, setResize] = useState(false)
  const [menuPressed, setMenuPressed] = useState(false)
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
            <div className="nav_wrapper" style={{display: (!resize || menuPressed) ? 'block' : 'none'}}>
                <OutsideAlerter setMenuPressed={setMenuPressed} resize={resize} menuPressed={menuPressed}>
                  <Navbar/>
                </OutsideAlerter>
              </div>
            <div className="menu_btn_wrapper" style={{display: (resize && !menuPressed)  ? ('inline') : 'none'}} >
              <MenuBtn setMenuPressed={setMenuPressed}/>              
            </div>
            <div className="cancel_btn_wrapper" style={{display: (resize && menuPressed) ? 'inline' : 'none'}} >
              <CancelBtn setMenuPressed={setMenuPressed}/>            
            </div>
              <div className='content_wrapper'>
              <Routes>
                
                <Route path='/' element={<Home/>} />
                <Route path='/aboutme' element={<Home/>} />
                <Route path='/experience' element={<Experience/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/education' element={<Education/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/playme' element={<TicTacToe/>} />
                
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
