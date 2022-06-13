import { useState, useEffect } from 'react';
import newyork from './images/newyork3.jpg';
import metlife from './images/metlife2.jpg';
import japanmarket from './images/japanmarket2.jpg';
import wave from './images/wave.png';
import trains from './images/trains2.jpg';

function BackgroundSelector(){

    const[backgroundImg, setBackgroundImg] = useState(newyork)
    useEffect(() => {
      const images = [newyork, metlife, wave, japanmarket, trains]
      setBackgroundImg(images[Math.floor(Math.random() * images.length)])
    }, []) 
    document.body.style.backgroundImage = `url(${backgroundImg})`
}
export default BackgroundSelector;