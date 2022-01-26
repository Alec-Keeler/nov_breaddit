'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
     {
       content: 'I dont think shrek is all its built up to be',
       userId: 4,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       content: 'The Good Place is the best show',
       userId: 3,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
