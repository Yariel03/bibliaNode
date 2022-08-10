"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          firstname: "John Doe",
          lastname: "Santos",
          phone: "+1-555-555-5555",
          email: "john@nomail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstname: "Jose ",
          lastname: "Flores",
          phone: "+1-555-555-5555",
          email: "jose@nomail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Contacts", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
