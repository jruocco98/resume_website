import parseData, {splitMovieString} from '../FilmDiary/Parser';

export function setParsedData(setMovieArray, data){
    setMovieArray(parseData(data))
}
export default function setCards(movieArray){
    let movies = [
        {
            url:   "",
            text :{
                title: '',
                releaseYear: '',
                dateWatched: '',
                rating: ''
                }           
        },        
        {
            url:   "",
            text :{
                title: '',
                releaseYear: '',
                dateWatched: '',
                rating: ''
                }           
        },
        {
            url:   "",
            text :{
                title: '',
                releaseYear: '',
                dateWatched: '',
                rating: ''
                }           
        },
        {
            url:   "",
            text :{
                title: '',
                releaseYear: '',
                dateWatched: '',
                rating: ''
                }          
        },
        {
            url:   "",
            text :{
                title: '',
                releaseYear: '',
                dateWatched: '',
                rating: ''
                }            
        },
        {
            url:   "",
            text :{
                title: '',
                releaseYear: '',
                dateWatched: '',
                rating: ''
                } 
        }
    ];
  
    for(let i = 0; i < movieArray.length; i++){

        let parsedMovie = splitMovieString(movieArray[i])
        movies[i].text.title = parsedMovie[0]
        movies[i].text.releaseYear = parsedMovie[1]
        movies[i].text.rating = parsedMovie[2]
        movies[i].url = parsedMovie[3]
        movies[i].text.dateWatched = parsedMovie[4]
    }
  
    return movies
}