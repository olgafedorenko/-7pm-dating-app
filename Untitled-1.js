fetch('http://localhost:5000/restaurants/37.786882/-122.399972')
  .then((resp) => resp.json()) // Transform the data into json
  .then((data) => {
    console.log(data)
    return data
})