const router = require('express').Router()
const ControllerUser = require('../controllers/user_controller')
const mid = require('../helper/midware')

// routing untuk get dan post menambahkan user baru
router.get('/add', ControllerUser.add_user)
router.post('/add', ControllerUser.post_add_user)

//melihat profile user
router.use(mid)
router.get("/:id", ControllerUser.show_user)

router.get("/:id/addFood", ControllerUser.getAddFoodToProfile)
router.post("/:id/addFood", ControllerUser.postAddFoodToProfile)

//routing untuk get dan post update data user
router.get('/:id/update', ControllerUser.update_user)
router.post('/:id/update', ControllerUser.post_update_user)

router.get("/:id/deleteFood/:foodId", ControllerUser.deleteFoodFromProfile)

router.get("/:id/sendMail", ControllerUser.sendMail)

module.exports = router