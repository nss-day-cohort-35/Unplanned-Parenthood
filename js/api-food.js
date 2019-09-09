/* restaurant event listener*/
document.querySelector("#restaurantsButton").addEventListener("click", event => {
    let userInput = document.querySelector("#restaurantInput").value
    restaurantSearch(userInput);
})
/*display restaurant names to the dom*/
function addFoodToDom(foodInNash) {
    foodInNash.forEach(restaurantObj => {
        restoContainer.innerHTML += restaurantsNashville(restaurantObj);
    } ) ; }
/*calls function that contains fetch*/
const restaurantSearch = (searchTerm) => {
  return fetch(`https://developers.zomato.com/api/v2.1/search?q=${searchTerm}&entity_id=1138&entity_type=city&start=first&sort=rating&apikey=98b3e8584106245a199e8c4987ab27b0`)
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        addFoodToDom(parsedRestaurants.restaurants)
        console.log(parsedRestaurants)
    }   )
}
 const restoContainer = document.querySelector("#nashFood");

 /* pulls name from the array*/
 const restaurantsNashville = (foodInNash) => {
    return `<h4  id="${foodInNash.id}">${foodInNash.restaurant.name}</h4>
    <p>${foodInNash.restaurant.location.address}</p>
    <p>${foodInNash.restaurant.phone_numbers}</p>
    <button type="button" id="restaurantSaveButton--${foodInNash.id}">${foodInNash.restaurant="Save"}</button> 
    `
        // creates save button
 }
restoContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("restaurantSaveButton")
    ) {let eventID = event.target.id.split("--")[1]
       let eventTitle = document.getElementById(eventID)
       console.log(eventTitle)
        let restaurantSelection = document.querySelector("#restaurantSelection")
        restaurantSelection.appendChild(eventTitle)
        restoContainer.innerHTML = "";
    }
})
