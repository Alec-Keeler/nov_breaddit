'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, { foreignKey: 'userId' })
    // const columnMapping = {}
    User.belongsToMany(models.Subbreaddit, { 
      foreignKey: 'userId',
      otherKey: 'subId',
      through: 'Subscription'
     })
  };
  return User;
};

// SELECT * FROM Users
// JOIN Subscriptions ON (Users.id = Subscriptions.userId)
// JOIN Subbreaddits ON (Subscriptions.subId = Subbreaddits.id)