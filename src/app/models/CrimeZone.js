import Sequelize, { Model } from 'sequelize';

class CrimeZone extends Model {
  static init(sequelize) {
    super.init(
      {
        zone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default CrimeZone;
