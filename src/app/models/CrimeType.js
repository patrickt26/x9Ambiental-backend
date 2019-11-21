import Sequelize, { Model } from 'sequelize';

class CrimeType extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default CrimeType;
