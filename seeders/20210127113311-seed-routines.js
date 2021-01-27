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
   return queryInterface.bulkInsert('Routines', [
     {
       routine_name: 'Push Up',
       calories: 5,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       routine_name: 'Jogging',
       calories: 10,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       routine_name: 'Jalan Santai',
       calories: 2,
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
    return queryInterface.bulkDelete('Routines', null, {})
  }
};
