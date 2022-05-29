import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Experience from './pages/experience';
import Skills from './pages/skills';
import TicTacToe from './pages/playme';
import Education from './pages/education'
import Projects from './pages/projects'
import ButtonGroup from './ButtonGroup/ButtonGroup';

//Images
import newyork from './images/newyork3.jpg';
import metlife from './images/metlife2.jpg';
import japanmarket from './images/japanmarket2.jpg';
import wave from './images/wave.png';
import trains from './images/trains2.jpg';
import { useEffect, useState } from 'react';
function App() {

  const[backgroundImg, setBackgroundImg] = useState(newyork)
  useEffect(() => {
    const images = [newyork, metlife, wave, japanmarket, trains]
    setBackgroundImg(images[Math.floor(Math.random() * images.length)])
  }) 
  document.body.style.backgroundImage = `url(${backgroundImg})`
  return (
    <>

      <div className="wrapper">

      <div className='enabled'>

        <div
          className="buttonGroup">
            <ButtonGroup/>
        </div>
        <div
          className="parent">
          <Router>
            <Navbar />
            
            <Routes>
              <Route path='/' element={<Home/>} />
              
              <Route path='/experience' element={<Experience/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/education' element={<Education/>} />
              <Route path='/skills' element={<Skills/>} />
              <Route path='/playme' element={<TicTacToe/>} />
              
            </Routes>
          </Router>  
        </div> 
      </div> 
      </div>
    </>
    
  );
}

export default App;
