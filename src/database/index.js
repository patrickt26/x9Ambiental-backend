import Sequelize from 'sequelize';

import User from '../app/models/User';
import Report from '../app/models/Report';
import CrimeType from '../app/models/CrimeType';
import CrimeZone from '../app/models/CrimeZone';

import databaseConfig from '../config/database';

const models = [User, Report, CrimeType, CrimeZone];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
