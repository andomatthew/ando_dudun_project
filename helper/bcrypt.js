const bcrypt = require('bcryptjs')

function hash_password(password) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  return hash
}

function compare(input, database) {
  const output = bcrypt.compareSync(input, database)

  return output
}

module.exports = { hash_password, compare }