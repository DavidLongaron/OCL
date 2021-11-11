module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tag', {
    tagName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Tags.associate = (db) => {
    Tags.belongsToMany(db.Chara, { through: 'CharaTags' });
  };
  return Tags;
};
