class ControllerRoutine {

  static show_routines(req, res) {
    res.send('masuk show routines')
  }

  static add_routine(req, res) {
    res.send('masuk add routine')
  }

  static post_add_routine(req, res) {
    res.send('masuk post add routine')
  }

  static delete_routine(req, res) {
    res.send('masuk delete routine')
  }
}

module.exports = ControllerRoutine