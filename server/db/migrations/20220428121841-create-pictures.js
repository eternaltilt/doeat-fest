module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurantSet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RestaurantSets',
          key: 'id',
        },
      },
      img_menu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      first_dish_img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      second_dish_img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      third_dish_img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Pictures');
  },
};
