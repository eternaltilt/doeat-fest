const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RestaurantComments extends Model {
    static associate({ RestaurantCard }) {
      RestaurantComments.belongsTo(RestaurantCard, { foreignKey: 'restaurantCard_id' });
    }
  }
  RestaurantComments.init({
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    restaurantCard_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'RestaurantCards',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'RestaurantComments',
  });
  return RestaurantComments;
};
