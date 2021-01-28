'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Food', [
     {
       food_name: 'Nasi Goreng',
       calories: 20,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      food_name: 'Nasi Padang',
      calories: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      food_name: 'Indomie',
      calories: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      food_name: 'Ayam Lalapan',
      calories: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Food', null, {})
  }
};
