const connectTOMongo = require ('./db')
const express = require('express')
// const bodyParser = require('body-parser')
connectTOMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Raj!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})