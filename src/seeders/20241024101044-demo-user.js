'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
      {
        email: 'minhhuy@gmail.com',
        username: 'Lý Hoàng Minh Huy',
        password: '123',
      },
      {
        email: 'minhhuy@gmail.com',
        username: 'Lý Hoàng Minh Huy',
        password: '123',
      },
      {
        email: 'minhhuy@gmail.com',
        username: 'Lý Hoàng Minh Huy',
        password: '123',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  }
};
