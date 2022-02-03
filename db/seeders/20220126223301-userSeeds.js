'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {
       username: 'aleclikesbread',
       password: 'breadpuns',
       email: 'alec@bread.com',
       likesBread: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       username: 'billy',
       password: 'butter',
       email: 'billy@bread.com',
       likesBread: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       username: 'douhgboy',
       password: 'pillsbury',
       email: 'pillslad@bread.com',
       likesBread: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       username: 'gingerbread',
       password: 'shrekisfine',
       email: 'ginger@bread.com',
       likesBread: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
