module.exports = (sequelize, DataTypes) => {
  const CharaTags = sequelize.define('CharaTag', {
    TagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CharaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return CharaTags;
};
