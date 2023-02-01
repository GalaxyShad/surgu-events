
const express = require('express')
const db = require('./src/queries')

const app = express()
const port = 5000

var cors = require('cors');

app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/cards', db.getCards)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})