
fetch("https://www.eventbriteapi.com/v3/events/search/?q=parenting&location.address=nashville&token=HHGEDIXLHO35AWYSVFRK", 
      {
  "headers": {
      "Authorization": "Bearer HHGEDIXLHO35AWYSVFRK",
      "Accept": "application/json"
    }
  
  }).then(data => data.json())
  .then(parsedData => console.table(parsedData))