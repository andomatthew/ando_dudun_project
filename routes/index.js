const router = require('express').Router()
//routes
const users = require('./users_routes')
const food = require('./food_routes')
const routines = require('./routines_routes')
//controller index
const ControllerIndex = require('../controllers/index_controller')

router.get('/', ControllerIndex.index)
router.use('/users', users)
router.use('/food', food)
router.use('/routines', routines)

module.exports = router