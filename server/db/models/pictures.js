const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pictures extends Model {
    static associate({ RestaurantSet }) {
      Pictures.belongsTo(RestaurantSet, { foreignKey: 'restaurantSet_id' });
    }
  }
  Pictures.init({
    restaurantSet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'RestaurantSets',
        key: 'id',
      },
    },
    img_menu: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    first_dish_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    second_dish_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    third_dish_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Pictures',
  });
  return Pictures;
};
