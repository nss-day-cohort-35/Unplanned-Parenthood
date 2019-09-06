
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
 
/* pulls name from the array*/
const meetupsNashville = (meetupInNash) => {
    return `<p>${meetupInNash.name.text}</p>`
} 
/*display restaurant names to the dom*/
function addMeetupToDom(meetupInNash) {
meetupInNash.forEach(meetupObj => {
    meetupContainer.innerHTML += meetupsNashville(meetupObj);
});}
const meetupContainer = document.querySelector("#nashMeetups");
/*calls function that contains fetch*/
meetupSearch("parenting");