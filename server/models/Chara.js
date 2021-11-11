// const Tags = require('./Tags');
// const User = require('./User');

module.exports = (sequelize, DataTypes) => {
// const Sequelize = require('sequelize');
// const db = require('./index');

  // const { sequelize } = db;
  // const { Sequelize } = db;
  const Chara = sequelize.define('Chara', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthDay: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    setting: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    likes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dislikes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    physicalDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    personality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Chara.associate = (db) => {
    Chara.belongsTo(db.User, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
    Chara.belongsToMany(db.Tag, { through: 'CharaTag' });
  };

  return Chara;
};
