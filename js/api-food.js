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
    return `<p>${foodInNash.restaurant.name}</p>`
} 
/*display restaurant names to the dom*/
 function addFoodToDom(foodInNash) {
foodInNash.forEach(restaurantObj => {
    restoContainer.innerHTML += restaurantsNashville(restaurantObj);
});}
 const restoContainer = document.querySelector("#nashFood");
/*calls function that contains fetch*/
 restaurantSearch("");
 
//  document.querySelector("#restaurantsButton").addEventListener("click"), event => {
//     restaurantSearch = document.querySelector(restuarantsNashville).value

//  }
    




