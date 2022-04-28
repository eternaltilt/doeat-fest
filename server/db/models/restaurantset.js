const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RestaurantSet extends Model {
    static associate({ Festival, Pictures, RestaurantCard }) {
      RestaurantSet.belongsTo(Festival, { foreignKey: 'festival_id' });
      RestaurantSet.belongsTo(RestaurantCard, { foreignKey: 'restaurantCard_id' });
      RestaurantSet.hasMany(Pictures, { foreignKey: 'restaurantSet_id' });
    }
  }
  RestaurantSet.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    set_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    first_dish: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    second_dish: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    third_dish: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    all_weight: {
      type: DataTypes.INTEGER,
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
    modelName: 'RestaurantSet',
  });
  return RestaurantSet;
};
