const { Food, UserFoodRoutine } = require("../models")

class ControllerFood {

  static show_food(req, res) {
    Food.findAll({ order: [["id", "asc"]] })
      .then(foodsData => {
        res.render("foods", { foodsData })
      })
      .catch(err => {
        res.send(err)
      })
    // res.send('masuk show food')
  }

  static add_food(req, res) {
    res.render("addFood")
    // res.send('masuk add food form')
  }

  static post_add_food(req, res) {
    let newFood = {
      food_name: req.body.food_name,
      calories: req.body.calories,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    Food.create(newFood)
      .then(() => {
        res.redirect("/foods")
      })
      .catch(err => {
        res.send(err.message)
      })
  }

  static delete_food(req, res) {
    const foodId = +req.params.id

    Food.destroy({ where: { id: foodId } })
      .then(() => {
        res.redirect("/foods")
      })
      .catch(err => {
        res.send(err)
      })
    // res.send('masuk delete food')
  }

}

module.exports = ControllerFood