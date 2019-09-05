fetch("https://data.nashville.gov/resource/xbru-cfzi.json?${searchTerm}=Yes&$$app_token=aH0AJvaMzg4KccAFcjktXYfIe")
.then(data => data.json())
.then(parsedData => {
    console.table(parsedData)
})

