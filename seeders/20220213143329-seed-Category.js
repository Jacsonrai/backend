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
      "Categories",
      [
        {
          name: 'Acute Bronchitis',
          description: 'patient has acute bronchitis which is caused by viral agent',
          prescription:'take analgesics or paracetamol for fever.Drinks a lot of water',
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Tuberculosis',
          description: 'During the physical exam, your doctor will check your lymph nodes for swelling and use a stethoscope to listen to the sounds your lungs make when you breathe.',
          prescription:'The exact drugs and length of treatment depend on your age, overall health, possible drug resistance and where the infection is in your body.',
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Malaria ',
          description: 'Parasite nucleic acids are detected using polymerase chain reaction (PCR). Although this technique may be slightly more sensitive than smear microscopy, it is of limited utility for the diagnosis of acutely ill patients in the standard healthcare setting. PCR results are often not available quickly enough to be of value in establishing the diagnosis of malaria infection.',
          prescription:' Chloroquine is the preferred treatment for any parasite that is sensitive to the drug. But in many parts of the world, parasites are resistant to chloroquine, and the drug is no longer an effective treatment.',
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Typhoid',
          description: 'The rash, which does not affect every patient, consists of rose-colored spots, particularly on the neck and abdomen.',
          prescription:'The only effective treatment for typhoid is antibiotics. The most commonly used are ciprofloxacin (for non-pregnant adults) and ceftriaxone.',
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
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
