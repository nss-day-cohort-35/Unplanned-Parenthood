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
/* fetch call*/
 const restaurantSearch = (searchTerm) => {
  return fetch(`https://developers.zomato.com/api/v2.1/search?q=${searchTerm}&entity_id=1138&entity_type=city&start=first&sort=rating&apikey=98b3e8584106245a199e8c4987ab27b0`)
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        addFoodToDom(parsedRestaurants.restaurants)
        console.log(parsedRestaurants)
    }   )
 } 
 /* pulls name from the array*/
 const restaurantsNashville = (foodInNash) => {
    return `<h4>${foodInNash.restaurant.name}</h4>
    <p>${foodInNash.restaurant.location.address}</p>
    <p>${foodInNash.restaurant.phone_numbers}</p>`

} 

 const restoContainer = document.querySelector("#nashFood");
/*calls function that contains fetch*/
 

    




