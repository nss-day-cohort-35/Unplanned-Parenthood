fetch("https://app.ticketmaster.com/discovery/v1/events.json?apikey=c5nNRGJ3HT9cjlyJiIc9YtjOrc3Tt4IV")
    .then(concerts => concerts.json())
    .then(parsedConcerts => {
        console.table(parsedConcerts)
    })
