const express = require('express')
const app = express()
const morgan = require('morgan') //if it is module install, you dont have to specify path
const logger = require('./logger')
const authorize = require('./authorize')

//req =>middleware =>res

//1.use vs route
//2.options - our own / express / third party middleware

//app.use([logger, authorize])
// app.use(express.static('./public')) //it place all contents in the public folder as static assets, which are publicly available
app.use(morgan('tiny'))

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
  //,[logger, authorize],
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
