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
      defaultValue: 'John',
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '25',
    },
    birthDay: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '22/4',
    },
    setting: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Fantasy',
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Worker',
    },
    likes: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Sweets',
    },
    dislikes: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'FrontEnd',
    },
    physicalDescription: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Average man',
    },
    personality: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Nice',
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Programmer form far away',
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://i.gyazo.com/5b05968e648f33842640c9433b4b3f7b.png',
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Other',
    },
  });

  Chara.associate = (db) => {
    Chara.belongsTo(db.User, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    });
    Chara.belongsToMany(db.Tag, { through: 'CharaTag' });
    Chara.belongsToMany(db.User, { through: 'Favorite' });
  };

  return Chara;
};
