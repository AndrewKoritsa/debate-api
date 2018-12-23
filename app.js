const express = require('express')
const app = express()
const morgan = require('morgan')

const usersRoutes = require('./api/routes/users')

app.use(morgan('dev'))

app.use('/users', usersRoutes)

app.use(( req, res, next ) => {

  const error = new Error('Not found')
  error.status = 404
  next(error)

})

app.use(( error, req, res, next ) => {

  res.status( error.status || 500 ).json({

      error: {
        message : error.message
      }

    })

})

// app.use(( req, res, next ) => {
//
//   res.status(200).json({
//     message : 'Works!'
//   })
//
// })

module.exports = app
