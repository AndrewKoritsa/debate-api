const express = require('express')
const router = express.Router()

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

  res.status(200).json({

    message : 'POST users'

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
