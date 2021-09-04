export const getGifs = async (category) => {
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=pdlj9XBVF02CH7jOpNNSQz8jLFCMizEf`;
    const resp = await fetch(url);
    const data = await resp.json();
    let chuckGif;
    let randomPosition;
    if (data.data.length > 0) {
        randomPosition = Math.floor(Math.random() * 18) + 1 //this number is not arbritary check the URL CALL
        chuckGif={
            id: data.data[randomPosition].id,
            title: data.data[randomPosition].title,
            url: data.data[randomPosition].images?.downsized_medium.url 
        }
    } else {
        console.log("no hay gif")
        randomPosition = Math.floor(Math.random() * 200) + 1
        chuckGif = {
            id: "",
            title: "No Title",
            url: "nourl"
        }
    }
    return chuckGif;
}