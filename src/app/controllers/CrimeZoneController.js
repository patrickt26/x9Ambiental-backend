import * as Yup from 'yup';

import CrimeZone from '../models/CrimeZone';

class ReportController {
  async index(req, res) {
    const crimeZone = await CrimeZone.findAll();

    return res.json(crimeZone);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      zone: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const crimeZone = await CrimeZone.create(req.body);

    return res.json(crimeZone);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      zone: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const crimeZone = await CrimeZone.findByPk(req.params.id);

    await crimeZone.update(req.body);

    return res.json(crimeZone);
  }
}

export default new ReportController();
