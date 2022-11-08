module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Matriculas', [
      {
        status: "confirmado",
        estudante_id: 7,
        turma_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 8,
        turma_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 9,
        turma_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "confirmado",
        estudante_id: 10,
        turma_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 7,
        turma_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: "cancelado",
        estudante_id: 8,
        turma_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
