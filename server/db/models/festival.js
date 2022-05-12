const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Festival extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ RestaurantSet, RestaurantManager, FestivalComments }) {
      Festival.hasMany(RestaurantSet, { foreignKey: 'festival_id' });
      Festival.hasMany(RestaurantManager, { foreignKey: 'festival_id' });
      Festival.hasMany(FestivalComments, { foreignKey: 'festival_id' });
    }
  }
  Festival.init({
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    start_date: {
      type: DataTypes.STRING,
    },
    finish_date: {
      type: DataTypes.STRING,
    },
    festivalSetPrice: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Festival',
  });
  return Festival;
};
