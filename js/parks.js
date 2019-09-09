/* parkSearch is a variable that runs a function (return fetch). Fetch accesses the API data and converts it into a format that JavaScript can read (parkData => parkData.json()). That readable data is then run through the function "addParkToDom" in order to be displayed on your webpage. */
document.querySelector("#parksButton").addEventListener("click", () =>{    
    let userInput = document.querySelector("#parkInput").value
    parkSearch(userInput);
})
 /*display restaurant names to the dom*/
 function addParkToDom(parksInNash) {
    parksInNash.forEach(parkObj => {
        parkContainer.innerHTML += parksNashville(parkObj);
        });
}
   /* pulls name from the array*/
const parksNashville = (parksInNash) => {
    return `<h4>${parksInNash.park_name}</h4>
    <p>${parksInNash.mapped_location_address}</p>
    <p>${parksInNash.mapped_location_city}, ${parksInNash.mapped_location_state}</p>
    `
} 
const parkContainer = document.querySelector("#nashParks");

const parkSearch = (searchTerm) => {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${searchTerm}=Yes&$$app_token=aH0AJvaMzg4KccAFcjktXYfIe`)
    .then(parkData => parkData.json())
    .then(parsedParkData => {
        addParkToDom(parsedParkData)
        console.table(parsedParkData)
        })   


 
   
  /*calls function that contains fetch*/
   
}