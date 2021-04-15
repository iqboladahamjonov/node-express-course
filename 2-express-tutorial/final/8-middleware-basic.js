const express = require('express')
const app = express()

//req =>middleware =>res

const logger = (req, res, next) => {
  //req, res, next will be supplied by express
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  //! when working with middleware, you must supply next middleware
  // res.send('testing')
  next()
}

app.get('/', logger, (req, res) => {
  // console.log(method, url, time) //if i have many routes with the the same time request, it would be pain in the neck, that is why middleware is better choice
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
