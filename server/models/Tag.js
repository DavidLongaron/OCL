// const Chara = require('./Chara');

module.exports = (sequelize, DataTypes) => {
// const Sequelize = require('sequelize');
// const { sequelize, Sequelize } = require('./index');

  const Tags = sequelize.define('Tag', {
    tagName: DataTypes.STRING,
  });

  Tags.associate = (db) => {
    Tags.belongsToMany(db.Chara, { through: 'CharaTag' });
  };
  return Tags;
};
