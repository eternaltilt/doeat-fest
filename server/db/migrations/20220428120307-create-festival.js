module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Festivals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      start_date: {
        type: Sequelize.STRING,
      },
      finish_date: {
        type: Sequelize.STRING,
      },
      festivalSetPrice: {
        type: Sequelize.STRING,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Festivals');
  },
};
