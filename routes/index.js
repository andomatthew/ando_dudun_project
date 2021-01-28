const router = require('express').Router()
//routes
const users = require('./users_routes')
const foods = require('./food_routes')
const routines = require('./routines_routes')
//controller index
const ControllerIndex = require('../controllers/index_controller')

router.get('/', ControllerIndex.index)
router.get('/login', ControllerIndex.getLogin)
router.use('/users', users)
router.use('/foods', foods)
router.use('/routines', routines)

module.exports = router