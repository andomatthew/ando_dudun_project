const router = require('express').Router()
const ControllerRoutine = require('../controllers/routine_controller')

//routing untuk show data routine di databas
router.get('/', ControllerRoutine.show_routines)

//routing get dan post untuk add routine baru
router.get('/add', ControllerRoutine.add_routine)
router.post('/add', ControllerRoutine.post_add_routine)

//routing untuk delete routine
router.get('/:id/delete', ControllerRoutine.delete_routine)

//routing untuk edit routine bisa ditambahkan nanti jika dibutuhkan
module.exports = router