const { User, UserFoodRoutine, Food } = require("../models")
const formatDistance = require('date-fns/formatDistance')
const nodemailer = require('nodemailer');

class ControllerUser {

  static show_users(req, res) {
    res.send('masuk controller user - show users')
  }

  static add_user(req, res) {
    let session = req.session.user_id
    res.render("addUser", { session })
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
    let fullName;
    let session = req.session.user_id

    User.findByPk(id, { include: [Food] })
      .then(user => {
        fullName = user.fullName()
        let daily_calories = user.totalCal()
        // var result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
        // let result = formatDistance(user.Food.UserFoodRoutine.updatedAt.toISOString().substring(0, 10), user.Food.UserFoodRoutine.createdAt.toISOString().substring(0, 10))
        // console.log(result);
        res.render("userProfile", { user, fullName, daily_calories, session })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAddFoodToProfile(req, res) {
    const id = +req.params.id
    let foodsData;
    let session = req.session.user_id

    Food.findAll()
      .then(data => {
        foodsData = data
        return User.findByPk(id, { include: [Food] })
      })
      .then(userData => {
        res.render("addFoodToProfile", { foodsData, userData, session })
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
          food.calories += calorieData * food.food_count
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
    let id = +req.params.id
    let session = req.session.user_id

    User.findByPk(id)
      .then(user => {
        res.render('editUser', { data: user, session })
      })
      .catch(err => {
        res.send(err.message)
      })
  }

  static post_update_user(req, res) {
    let id = +req.params.id
    let { username, password, first_name, last_name, email, createdAt } = req.body
    let obj = { username, password, first_name, last_name, email, createdAt, updatedAt: new Date() }

    User.update(obj, {
      where: { id }
    })
      .then(() => {
        res.redirect(`/users/${id}`)
      })
      .catch(err => {
        res.send(err.message)
      })
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

  static sendMail(req, res) {
    const id = +req.params.id

    User.findByPk(id, { include: [Food] })
      .then(data => {
        let daily_calories = data.totalCal()

        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'pairprojectAD@gmail.com',
            pass: 'ppAD123.'
          }
        }); const mailOptions = {
          from: 'pairprojectAD@gmail.com  ',
          to: `${data.email}`,
          subject: 'Your Daily Calories Intake',
          html: `<p>Your daily Calories Intake is ${daily_calories} kcal </p>`
        }

        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
          }
          res.redirect(`/users/${user.id}`)
        })
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = ControllerUser