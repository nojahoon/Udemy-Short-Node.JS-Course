const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

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

app.listen(port , () => {
  console.log(`App running on port ${port}. `)
})
