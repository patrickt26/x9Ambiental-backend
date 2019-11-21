import Sequelize, { Model } from 'sequelize';

class Report extends Model {
  static init(sequelize) {
    super.init(
      {
        address: Sequelize.STRING,
        latitude: Sequelize.DECIMAL(6, 9),
        longitude: Sequelize.DECIMAL(6, 9),
        crime_type: Sequelize.STRING,
        crime_zone: Sequelize.STRING,
        description: Sequelize.STRING,
        resolved_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Report;
