'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Subbreaddits', [
     {
       name: "how2bake",
       description: "For those trying to learn how to bake",
       createdAt: new Date(),
       updatedAt: new Date()

     },
     {
       name: "Layered Bread",
       description: "For discussion of all breads with some manner of layers, like pies.  Not for discussing onions.",
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
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
