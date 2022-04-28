module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FestivalComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING,
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
      status: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('FestivalComments');
  },
};
