fetch("https://app.ticketmaster.com/discovery/v2/events.jsonclassificationName=music&city=nashville&radius=25&apikey=c5nNRGJ3HT9cjlyJiIc9YtjOrc3Tt4IV")
    .then(concerts => concerts.json())
    .then(parsedConcerts => {
    console.table(parsedConcerts)
    })
