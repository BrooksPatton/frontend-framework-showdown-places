const express = require('express')
const app = express()

app.post('/api/v1/places', (request, response) => {
  response.status(201).json({ id: 1 })
})

module.exports = app
