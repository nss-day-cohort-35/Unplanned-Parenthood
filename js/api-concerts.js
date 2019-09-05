fetch(`https://app.ticketmaster.com/discovery/v2/events/?keyword=&city=nashville&apikey=c5nNRGJ3HT9cjlyJiIc9YtjOrc3Tt4IV`)
    .then(concerts => concerts.json())
    .then(parsedConcerts => {
    console.table(parsedConcerts)
    })