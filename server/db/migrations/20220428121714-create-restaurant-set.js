module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RestaurantSets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      set_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      first_dish: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      second_dish: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      third_dish: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      all_weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      restaurantCard_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RestaurantCards',
          key: 'id',
        },
      },
      festival_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Festivals',
          key: 'id',
        },
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
    await queryInterface.dropTable('RestaurantSets');
  },
};
