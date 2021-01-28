const router = require('express').Router()
const ControllerFood = require('../controllers/food_controller')
const mid = require('../helper/midware')

//routing menamilkan daftar food
router.get('/', ControllerFood.show_food)

//routing menampilkan get dan post add foo
router.use(mid)
router.get('/add', ControllerFood.add_food)
router.post('/add', ControllerFood.post_add_food)

//routing untuk delete food
router.get('/:id/delete', ControllerFood.delete_food)

//routing edit food bisa ditambah nanti jika dibutuhkan/diinginkan

module.exports = router