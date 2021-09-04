import {useEffect, useState} from "react"
import { getJoke } from "../helpers/GetJoke";
export const useFetchJoke = (topic) => {

    const [state, setState] = useState({
        data: "",
    });

    useEffect(()=>{ 
        getJoke(topic)
        .then(jokeData => {
                        setTimeout(() => { 
                            setState({ 
                                chuckJoke: jokeData.joke,
                                key: jokeData.id
                            })
                        }, 1000);  
                   })
    }, [topic]) 
    return state; 
}
