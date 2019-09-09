/* parkSearch is a variable that runs a function (return fetch). Fetch accesses the API data and converts it into a format that JavaScript can read (parkData => parkData.json()). That readable data is then run through the function "addParkToDom" in order to be displayed on your webpage. */
document.querySelector("#parksButton").addEventListener("click", () =>{    
    let userInput = document.querySelector("#parkInput").value
    parkSearch(userInput);
})    

/* Where park search results are displayed */
const parkContainer = document.querySelector("#nashParks");

 /*display park names to the dom*/
 function addParkToDom(parksInNash) {
    parksInNash.forEach(parkObj => {
        parkContainer.innerHTML += parksNashville(parkObj);
        });
}

   /* pulls name from the array*/
const parksNashville = (parksInNash) => {
    return `
    <h4 id="${parksInNash.park_name}">${parksInNash.park_name}</h4>
    <p>${parksInNash.mapped_location_address}</p>
    <p>${parksInNash.mapped_location_city}, ${parksInNash.mapped_location_state}</p>
    <button type="button" id="parksSaveButton--${parksInNash.park_name"> ${}="Save"}</button> 
    `
} 

parkContainer.addEventListener("click", event => {
    if(park.target.index.startsWith("parksSaveButton")){
        let parkId = park.target.park_name.split("--")[1]
        let parkTitle = document.getElementById(parkId)
        let parkSelection = document.querySelector("#parksSelection")
        parkSelection.innerHTML += eventTitle
    }
})

const parkSearch = (searchTerm) => {
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${searchTerm}=Yes&$$app_token=aH0AJvaMzg4KccAFcjktXYfIe`)
    .then(parkData => parkData.json())
    .then(parsedParkData => {
        addParkToDom(parsedParkData)
        console.table(parsedParkData)
        })   
}



