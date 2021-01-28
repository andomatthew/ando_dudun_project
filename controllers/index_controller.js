class ControllerIndex {
  static index(req, res) {
    res.render("index")
  }

  static getLogin(req, res) {
    res.render("login")
  }

  static postLogin(req, res) {
    let obj = {
      username: req.body.username,
      password: req.body.password
    }
  }
}

module.exports = ControllerIndex