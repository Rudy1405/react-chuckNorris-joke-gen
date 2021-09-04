import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { useFetchJoke} from '../hooks/useFetchJoke';

export const JokeItem = ({topic}) => {
    const category = "ChuckNorris"
    const {data, loading} = useFetchGif(category);
    const {chuckJoke, key} = useFetchJoke(topic);

    return (
        <>
            <br/>
                    <div>
                         <p id={key}> {chuckJoke} </p>
                         {loading && <p className="animate__animated animate__shakeX animate__delay-0.5s">Loading...</p>} 
                         <img src={data.url? data.url : ""} alt={data.title? data.title : "Chuck says : Not ur business"} />
                    </div>
                    
            <br/>
        </>
    )
}
