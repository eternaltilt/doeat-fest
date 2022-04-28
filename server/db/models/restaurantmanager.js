const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RestaurantManager extends Model {
    static associate({ Festival }) {
      RestaurantManager.belongsTo(Festival, { foreignKey: 'festival_id' });
    }
  }
  RestaurantManager.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    restaurant_name: {
      type: DataTypes.TEXT,
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
  }, {
    sequelize,
    modelName: 'RestaurantManager',
  });
  return RestaurantManager;
};
