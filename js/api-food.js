fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=98b3e8584106245a199e8c4987ab27b0")
    .then(food => food.json())
    .then(parsedFood => {
        console.table(parsedFood)
    })
