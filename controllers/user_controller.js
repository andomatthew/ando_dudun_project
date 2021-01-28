class ControllerUser {

  static show_users(req, res) {
    res.send('masuk controller user - show users')
  }

  static add_user(req, res) {
    res.render("addUser")
    // res.send('masuk add user (form')
  }

  static post_add_user(req, res) {
    let newUser = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    User.create(newUser)
      .then(() => {
        res.redirect("/users")
      })
      .catch(err => {
        res.send(err.message)
      })
    // res.send('masuk post add user')
  }

  static update_user(req, res) {
    res.send('masuk update user (form)')
  }

  static post_update_user(req, res) {
    res.send('masuk post update user')
  }

  static delete_user(req, res) {
    res.send('masuk delete user')
  }
}

module.exports = ControllerUser