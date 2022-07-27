const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended:true,
  })
)

//Get method to root url (/)
app.get('/',(request,response) => {
  response.json({Welcome: 'How to create API with Node.js , EXPRESS and PostgreSQL'})
})

// Endpoints
app.get('/countries',db.getCountries)
app.get('/countries/:id',db.getCountryById)
app.post('/countries',db.createCountry)
app.put('/countries/:id',db.updateCountry)
app.delete('/countries/:id',db.deleteCountry)

app.listen(port , () => {
  console.log(`App running on port ${port}. `)
})
