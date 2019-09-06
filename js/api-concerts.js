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
        console.log(parsedConcerts)
    })}
/* pulls name from the array*/
const concertsNashville = (concertsInNash) => {
    return `<h4>${concertsInNash.name}</h4>
            <p>${concertsInNash.dates.start.localDate}</p>
            <p>${concertsInNash.dates.start.localTime}</p>
            <p>${concertsInNash._embedded.venues[0].name}</p>
            `
} 
 const concertsContainer = document.querySelector("#concertsNash");
/*calls function that contains fetch*/
