import getFilmData from '../FilmDiary/Letterboxd';
import {useEffect, useState} from 'react';
import TopSlide from '../FilmDiary/Animation/TopSlide'
import BottomSlide from '../FilmDiary/Animation/BottomSlide'
import setCards, {setParsedData} from '../FilmDiary/MovieCards'
const FilmDiary = () => {

  const [movieArray, setMovieArray] = useState(['', '', '', '', '', ''])
  const [animationCheckArr, setAnimationCheckArr] = useState([false, false, false, false, false, false])
  const [movieObj, setMovieObj] = useState({})
  useEffect(() => {
      getFilmData()
      .then(data => { 
        setParsedData(setMovieArray, data)
      })
      .catch(error => {
        //Handle Error
      })
    
  }, [])
  useEffect(() =>{

    setMovieObj(setCards(movieArray))
    
  }, [movieArray])

  return (
    <>
      <div className='page'
        id='film-diary'>
          <div className='header-wrapper'>
            <div className="header">
              <h1>Film Diary</h1>
            </div>
            <div className='primary'><h2>Click through the movies I have watched recently.</h2>
              <br/>
              <h2 style={{marginTop: '-20px'}}>From my <a href={"https://letterboxd.com/gatorsnout/"} target={"_blank"}>letterboxd</a></h2>
            </div>
          </div>
          <hr style={{
            border:'solid black 3px',
            borderStyle: 'double',
            marginTop: '60px'
            }} />
          <div className='box-container'>
              {movieArray.map((curr, i) => (
                <>
                <div className='movie-box'  onClick={() => {
                    let tempArr = [...animationCheckArr];
                    tempArr[i] = (!animationCheckArr[i])
                    setAnimationCheckArr(tempArr)
                  }}>
                  <TopSlide animationCheck={animationCheckArr[i]}>
                    <div className='top' style={{
                        backgroundImage:(typeof movieObj[i] !== 'undefined') ? `url("${movieObj[i].url}")` : ''
                    }}>
                      <div className='movie-overlay' style={{backgroundColor: (animationCheckArr[i]) ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.0)'}}></div>   
                    </div>
                  </TopSlide>    
                  <BottomSlide animationCheck={animationCheckArr[i]}>
                    <div className='bottom'>                       
                      
                      <p><b>Title:</b> {(typeof movieObj[i] !== 'undefined') ? movieObj[i].text.title : ''}</p>
                      <p><b>Year:</b> {(typeof movieObj[i] !== 'undefined') ? movieObj[i].text.releaseYear : ''}</p>
                      <p><b>Date Watched:</b> {(typeof movieObj[i] !== 'undefined') ? movieObj[i].text.dateWatched : ''}</p>
                      <p><b>My rating:</b> {(typeof movieObj[i] !== 'undefined') ? movieObj[i].text.rating : ''}</p>
                         
                    </div>
                  </BottomSlide>
                </div>
                </>
              ))}
          </div>
      </div> 
    </>
  );
};

export default FilmDiary;