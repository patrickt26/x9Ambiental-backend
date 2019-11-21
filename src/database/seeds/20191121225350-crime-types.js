module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'crime_types',
      [
        {
          type: 'Queimada',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 'Desmatamento',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 'Despejo Inadequado de Lixo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type: 'Mautrato com Animais',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
