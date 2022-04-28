const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RestaurantCard extends Model {
    static associate({ RestaurantSet, RestaurantComments }) {
      RestaurantCard.hasMany(RestaurantSet, { foreignKey: 'restaurantCard_id' });
      RestaurantCard.hasMany(RestaurantComments, { foreignKey: 'restaurantCard_id' });
    }
  }
  RestaurantCard.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    adress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'RestaurantCard',
  });
  return RestaurantCard;
};
