const express = require('express')
const router = express.Router()
const Users = require('../models/users')

router.get('/', ( req, res, next ) => {

  res.status(200).json({

    message : 'GET users'

  })

})

router.get('/:userId', ( req, res, next ) => {

  const userId = req.params.userId

  res.status(200).json({

    message : `GET user ${userId}`

  })

})

router.post('/', ( req, res, next ) => {

  const user = new Users({
    name : 'zaebok'
  })

  user.save()
    .then( result => {

      if( !result || result.length === 0 ){

        return res.status(500).json(result)

      }else{

        res.status(200).json({

          message : 'POST user'

        })

      }

    })
    .catch( error => {

      res.status(500).json(error)

    })

})

router.put('/:userId', ( req, res, next ) => {

  const userId = req.params.userId

  res.status(200).json({

    message : `UPDATE user ${userId}`

  })

})

router.delete('/:userId', ( req, res, next ) => {

  const userId = req.params.userId

  res.status(200).json({

    message : `DELETE user ${userId}`

  })

})

module.exports = router
