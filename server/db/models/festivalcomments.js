const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FestivalComments extends Model {
    static associate({ Festival }) {
      FestivalComments.belongsTo(Festival, { foreignKey: 'festival_id' });
    }
  }
  FestivalComments.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    festival_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Festivals',
        key: 'id',
      },
    },
    status: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'FestivalComments',
  });
  return FestivalComments;
};
