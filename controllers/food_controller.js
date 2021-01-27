class ControllerFood {

  static show_food(req, res) {
    res.send('masuk show food')
  }

  static add_food(req, res) {
    res.send('masuk add food form')
  }

  static post_add_food(req, res) {
    res.send('masuk post add food')
  }

  static delete_food(req, res) {
    res.send('masuk delete food')
  }

}

module.exports = ControllerFood