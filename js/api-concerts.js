document.querySelector("#concertsButton").addEventListener("click", event => {
    let userInput = document.querySelector("#concertsInput").value
    concertsSearch(userInput);
})
/*display restaurant names to the dom*/
function addConcertsToDom(concertsInNash) {
    concertsInNash.forEach(concertsObj => {
        concertsContainer.innerHTML += concertsNashville(concertsObj);
    });}
const concertsSearch = (searchTerm) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events/?keyword=${searchTerm}&city=nashville&apikey=c5nNRGJ3HT9cjlyJiIc9YtjOrc3Tt4IV`)
    .then(concerts => concerts.json())
    .then(parsedConcerts => {
        addConcertsToDom(parsedConcerts._embedded.events)
    })}
/* pulls name from the array*/
const concertsNashville = (concertsInNash) => {
    return `<h4 id="${concertsInNash.id}">${concertsInNash.name}</h4>
            <p>${concertsInNash.dates.start.localDate}</p>
            <p>${concertsInNash.dates.start.localTime}</p>
            <p>${concertsInNash._embedded.venues[0].name}</p>
            <button type = "button "id="concertsSaveButton--${concertsInNash.id}">${concertsInNash._embedded="Save"}</button> 
            `
} 
 const concertsContainer = document.querySelector("#concertsNash");

 concertsContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("concertsSaveButton")
    ) {let eventID = event.target.id.split("--")[1]
       let eventTitle = document.getElementById(eventID)
        let concertsSelection = document.querySelector("#concertsSelection")
        concertsSelection.appendChild(eventTitle)
        concertsContainer.innerHTML = "";
    }
})
