module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  User.associate = (db) => {
    User.hasMany(db.Chara, {
      as: 'characters',
    });
    User.belongsToMany(db.Chara, {
      through: 'Favorite',
      as: 'favorite',
    });
  };
  return User;
};
