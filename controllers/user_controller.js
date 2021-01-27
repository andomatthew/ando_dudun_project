class ControllerUser {
  
  static show_users(req, res) {
    res.send('masuk controller user - show users')
  }

  static add_user(req, res) {
    res.send('masuk add user (form')
  }

  static post_add_user(req, res) {
    res.send('masuk post add user')
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