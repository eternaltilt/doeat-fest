module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RestaurantManagers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      restaurant_name: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    await queryInterface.dropTable('RestaurantManagers');
  },
};
