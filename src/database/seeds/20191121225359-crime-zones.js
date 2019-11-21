module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'crime_zones',
      [
        {
          zone: 'Mata',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          zone: 'Área Urbana',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          zone: 'Lago, Rio e etc...',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
