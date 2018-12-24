const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const usersRoutes = require('./api/routes/users')

// database connection start

const db_server = '127.0.0.1'
const db_database = 'debate'
const db_user = 'admin'
const db_password = 'admin'

mongoose.connect(`mongodb://${db_user}:${db_password}@${db_server}/${db_database}`, { useNewUrlParser: true })

// database connection end

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//headers
app.use(( req, res, next ) => {

  res.header( 'Access-Control-Allow-Origin', '*' )
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' )

  if( res.method === 'OPTIONS' ){

    req.header( 'Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET' )
    return res.status(200).json({})

  }

  next()

})

// routes
app.use('/users', usersRoutes)


//404
app.use(( req, res, next ) => {

  const error = new Error('Not found')
  error.status = 404
  next(error)

})

//500
app.use(( error, req, res, next ) => {

  res.status( error.status || 500 ).json({

      error: {
        message : error.message
      }

    })

})

module.exports = app
