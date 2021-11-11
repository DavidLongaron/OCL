module.exports = (sequelize, DataTypes) => {
  const CharaTag = sequelize.define('CharaTag', {
    TagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CharaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // CharaTag.associate = (db) => {
  //   CharaTag.belongsTo(db.Chara, {
  //     onDelete: 'CASCADE',
  //     foreignKey: { allowNull: false },
  //   });
  //   CharaTag.belongsTo(db.Tag, {
  //     onDelete: 'CASCADE',
  //     foreignKey: { allowNull: false },
  //   });
  // };
  return CharaTag;
};
