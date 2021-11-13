module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CharaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Favorite;
};
