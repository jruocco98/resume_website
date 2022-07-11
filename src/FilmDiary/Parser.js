export default function parseData(data){

    const MOVIE_NUM = 6 //Number of movies shown
    let movieTitle = ''
    let date = ''
    let rating = ''
    let dateWatched = ''
    let poster = ''
    let movieArray = ['','','','','','']
    let parser = new DOMParser()
    let xmlDoc = parser.parseFromString(data,"text/xml")

    for(let i = 0; i < MOVIE_NUM; i++){
        //Title tag contains movie title, user rating, and release date
        let xmlTag = xmlDoc.getElementsByTagName("title")[i + 1].childNodes[0].nodeValue

        let temp = xmlTag.split(', ')
        movieTitle = temp[0]
        
        temp = temp[1].split(' - ')
        date = temp[0]
        rating = temp[1]

        //Description tag poster image
        xmlTag = xmlDoc.getElementsByTagName("description")[i + 1].childNodes[0].nodeValue
        poster = xmlTag.split('"')[1]
    
        //letterboxd:watchedDate
        xmlTag = xmlDoc.getElementsByTagName("letterboxd:watchedDate")[i].childNodes[0].nodeValue    
        dateWatched = xmlTag

        let movieString = (`${movieTitle}||${date}||${rating}||${poster}||${dateWatched}`)
        movieArray[i] = movieString
    }
    return movieArray
  }

export function splitMovieString(movieString){

    //Format: movieTitle-[0] || date-[1] || rating-[2] || poster-[3] || dateWatched-[4]
    let movieArr = movieString.split('||')
    
    return movieArr
}