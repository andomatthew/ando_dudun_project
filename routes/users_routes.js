const router = require('express').Router()
const ControllerUser = require('../controllers/user_controller')

//routing menampilkan semua user dalam database
router.get('/', ControllerUser.show_users)

// routing untuk get dan post menambahkan user baru
router.get('/add', ControllerUser.add_user)
router.post('/add', ControllerUser.post_add_user)

//melihat profile user
router.get("/:id", ControllerUser.show_user)

router.get("/:id/addFood", ControllerUser.getAddFoodToProfile)
router.post("/:id/addFood", ControllerUser.postAddFoodToProfile)

//routing untuk get dan post update data user
router.get('/:id/update', ControllerUser.update_user)
router.post('/:id/update', ControllerUser.post_update_user)

//routing untuk menghapus data user
router.get('/:id/delete', ControllerUser.delete_user)

router.get("/:id/deleteFood/:foodId", ControllerUser.deleteFoodFromProfile)

module.exports = router