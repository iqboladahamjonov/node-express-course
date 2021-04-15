const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//req =>middleware =>res

// app.use(logger)
// app.use('/api', logger) //this will apply the logger starting only after api routes
app.use([logger, authorize]) //order matters

app.get('/', (req, res) => {
  // console.log(method, url, time) //if i have many routes with the the same time request, it would be pain in the neck, that is why middleware is better choice
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user) //{ name: 'john', id: 3 }
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
