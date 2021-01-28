class ControllerIndex {
  static index(req, res) {
    res.render("index")
    // res.send('masuk controller index')
  }
}

module.exports = ControllerIndex