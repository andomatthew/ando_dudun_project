const { User } = require('../models')
const { compare } = require('../helper/bcrypt')

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
    User.findAll({ where: { username: obj.username } })
      .then(user => {
        console.log(user)
        if (!user.length) {
          res.redirect('/login')
        }
        else {
          let isTrue = compare(obj.password, user[0].password)
          if (isTrue) {
            req.session.user_id = user[0].id
            res.redirect('/users/' + user[0].id)
          }
          else {
            console.log('=======')
            let isTrue = compare(obj.password, user[0].password)
            if (isTrue) {
              console.log(user);
              res.redirect(`/users/${user[0].id}`)
            }
            else {
              res.redirect('/login')
            }
          }
        }
      })
      .catch(err => {
        res.send(err.message)
      })
  }
}

module.exports = ControllerIndex