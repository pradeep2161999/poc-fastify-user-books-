'use strict';
const bcrypt = require('bcrypt');
const { brotliCompressSync } = require('zlib');
module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users',[{
        name: "pradeep",
        email: "pradeep@ymail.com",
        role: "admin",
        password: bcrypt.hashSync("pradeep", 10),
        mark_as_signin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
       }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};