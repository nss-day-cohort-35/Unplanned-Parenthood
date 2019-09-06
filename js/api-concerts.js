const concertsSearch = (searchTerm) => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events/?keyword=${searchTerm}&city=nashville&apikey=c5nNRGJ3HT9cjlyJiIc9YtjOrc3Tt4IV`)
    .then(concerts => concerts.json())
    .then(parsedConcerts => {
        addConcertsToDom(parsedConcerts._embedded.events)
        console.log(parsedConcerts)
    })}
/* pulls name from the array*/
const concertsNashville = (concertsInNash) => {
    return `<p>${concertsInNash.name}</p>`
} 
/*display restaurant names to the dom*/
 function addConcertsToDom(concertsInNash) {
concertsInNash.forEach(concertsObj => {
    concertsContainer.innerHTML += concertsNashville(concertsObj);
});}
 const concertsContainer = document.querySelector("#concertsNash");
/*calls function that contains fetch*/
 concertsSearch("dion");