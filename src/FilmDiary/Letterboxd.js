import fetch from 'node-fetch';

export default async function getFilmData(){
 
    const URL = 'https://film-rss-server.herokuapp.com/rss'
    const response = await fetch(URL)
    if(response.status === 200){
        const data = await response.text()
        return data
    }
    else{
        return 'FETCH FAILED'
    }

}
