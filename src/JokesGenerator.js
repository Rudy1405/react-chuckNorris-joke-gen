import React, {useState} from 'react'
import { AddTopic } from './components/AddTopic'
import { JokeItem } from './components/JokeItem';

export const JokesGenerator = () => {
    const [topics, setTopic] = useState([]);
    function showJokeMessage() {
       alert("No one calls Chuck Norris a MF!, hit enter to find your Jokes, punkass!");
      }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="animate__animated animate__jackInTheBox animate__delay-1s"> Chuck Norris Jokes Generator </h2>
                    <hr className="animate__animated animate__zoomIn animate__delay-0.5s" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img alt="Now Chuck Jokes on you" src="https://www.guioteca.com/curiosidades/files/2015/10/Chuck-Norris1.jpg"  width="300" height="250"/>
                </div>
                <div className="col">
                    <h3 className="subtitle"> Type a topic to find a Joke: </h3>
                    <AddTopic setTopic={setTopic}/>
                    <button onClick={showJokeMessage} type="button" className="btn btn-light">Find that Joke mf!</button>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                    {
                        topics.map( (topic,idx) => (
                            <JokeItem key={idx} topic={topic} />
                        )) 
                    }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 
