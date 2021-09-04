export const getJoke = async (topic) => {
    const url= `https://api.chucknorris.io/jokes/search?query=${encodeURI(topic)}`;
    const resp = await fetch(url);
    const jokeData = await resp.json();
    let joke;
    let randomPosition
    if (jokeData.result.length > 0 ) {
        randomPosition = Math.floor(Math.random() * jokeData.total) + 1
        joke = {
            id: jokeData.result[randomPosition]?.id,
            url: jokeData.result[randomPosition]?.url,
            joke: jokeData.result[randomPosition]?.value? jokeData.result[randomPosition].value :"No joke found, you won this time." //patch
        }
    } else {
        randomPosition = Math.floor(Math.random() * 1000) + 1
        joke = {
            id: randomPosition,
            url: "No URL",
            joke: "No joke found, you won this time."
        }
    }
   
        return joke;
}