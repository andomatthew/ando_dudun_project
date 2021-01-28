const { id } = require("date-fns/locale")
const { User, UserFoodRoutine, Food } = require("../models")

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
      total_calories: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    User.create(newUser)
      .then(data => {
        res.redirect(`/users/${data.id}`)
      })
      .catch(err => {
        res.send(err.message)
      })
    // res.send('masuk post add user')
  }

  static show_user(req, res) {
    const id = +req.params.id

    User.findByPk(id, { include: [{ model: Food }] })
      .then(user => {
        let fullName = user.fullName()
        res.render("userProfile", { user, fullName })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAddFoodToProfile(req, res) {
    const id = +req.params.id
    let foodsData;

    Food.findAll()
      .then(data => {
        foodsData = data
        return User.findByPk(id, { include: [Food] })
      })
      .then(userData => {
        // res.send(userData)
        res.render("addFoodToProfile", { foodsData, userData })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static postAddFoodToProfile(req, res) {
    let food = {
      user_id: +req.params.id,
      food_id: +req.body.foodId,
      createdAt: new Date(),
      updatedAt: new Date(),
      calories: 0,
      food_count: 0
    }

    let calorieData;
    let foodCount;

    Food.findByPk(food.food_id)
      .then(data => {
        calorieData = data.calories
        return UserFoodRoutine.findAll({ where: { user_id: food.user_id, food_id: food.food_id } })
      })
      .then(data => {
        if (!data.length) {
          food.food_count = 1
          return UserFoodRoutine.create(food)
        } else {
          foodCount = data[0].food_count
          food.food_count = foodCount
          food.food_count++
          food.calories += calorieData * food.food_count
          return UserFoodRoutine.update(food, { where: { user_id: food.user_id, food_id: food.food_id } })
        }
      })
      .then(() => {
        res.redirect(`/users/${req.params.id}`)
      })
      .catch(err => {
        res.send(err)
      })

  }

  static update_user(req, res) {
    res.send('masuk update user (form)')
  }

  static post_update_user(req, res) {
    res.send('masuk post update user')
  }

  static deleteFoodFromProfile(req, res) {
    const userId = +req.params.id
    const foodId = +req.params.foodId

    UserFoodRoutine.destroy({ where: { user_id: userId, food_id: foodId } })
      .then(() => {
        res.redirect(`/users/${req.params.id}`)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static delete_user(req, res) {
    res.send('masuk delete user')
  }
}

module.exports = ControllerUser