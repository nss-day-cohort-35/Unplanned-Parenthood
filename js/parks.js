/* parkSearch is a variable that runs a function (return fetch). Fetch accesses the API data and converts it into a format that JavaScript can read (parkData => parkData.json()). That readable data is then run through the function "addParkToDom" in order to be displayed on your webpage. */
const parkSearch = (searchTerm) => {
    return fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=aH0AJvaMzg4KccAFcjktXYfIe")
      .then(parkData => parkData.json())
      .then(parsedParkData => {
          addParkToDom(parsedParkData)
          console.table(parsedParkData)
      }   )
   } 
   /* pulls name from the array*/
   const parksNashville = (parksInNash) => {
      return `<p>${parksInNash.park_name}</p>`
  } 
  /*display restaurant names to the dom*/
   function addParkToDom(parksInNash) {
  parksInNash.forEach(parkObj => {
      parkContainer.innerHTML += parksNashville(parkObj);
        });
    }
   const parkContainer = document.querySelector("#nashParks");
  /*calls function that contains fetch*/
   parkSearch();
