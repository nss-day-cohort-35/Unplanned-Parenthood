//adds the event listener and query selector for ID to trigger the click event. Calls the search function in the event listener.
document.querySelector("#meetupButton").addEventListener("click", event => {
    let userInput = document.querySelector("#meetupInput").value
    meetupSearch(userInput);
}) 

/*display restaurant names to the dom*/
function addMeetupToDom(meetupInNash) {
    meetupInNash.forEach(meetupObj => {
        meetupContainer.innerHTML += meetupsNashville(meetupObj);
    });}

/* pulls name from the array*/
const meetupsNashville = (meetupInNash) => {
    return `<h4>${meetupInNash.name.text}</h4>
            <p>${meetupInNash.start.local.split("T")[0]}</p>
            <p>${meetupInNash.summary}</p>`
} 

const meetupContainer = document.querySelector("#nashMeetups");

/*function fetches search*/
const meetupSearch = (searchTerm) => {
return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchTerm}&location.address=nashville&token=HHGEDIXLHO35AWYSVFRK`, 
      {
    "headers": {
        "Authorization": "Bearer HHGEDIXLHO35AWYSVFRK",
        "Accept": "application/json"
    }
    }).then(meetupData => meetupData.json())
    .then(parsedMeetupData => {
        addMeetupToDom(parsedMeetupData.events)
        console.table(parsedMeetupData)
    })
}

