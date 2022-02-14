"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Snoop",
          age: "25",
          phone: "111-222-3333",
          email: "snoopydog@dogpound.com",
          gender: "male",
          endingDate: "12739182739812",
           medicalDiagnosis: "asdjhkkajsdhakjshdkjasd",
          description: "ajksdhgkjashdkjashdkj",
          prescription: "asdjkhaksjdhajksdhas",
          allergies: "sdhjaksjdhajksd",
          startDate: "8123912381923",

          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('users', null, {})
  },
};
