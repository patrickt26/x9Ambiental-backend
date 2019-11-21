import * as Yup from 'yup';

import CrimeType from '../models/CrimeType';

class ReportController {
  async index(req, res) {
    const crimeTypes = await CrimeType.findAll();

    return res.json(crimeTypes);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const crimeTypes = await CrimeType.create(req.body);

    return res.json(crimeTypes);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const crimeTypes = await CrimeType.findByPk(req.params.id);

    await crimeTypes.update(req.body);

    return res.json(crimeTypes);
  }
}

export default new ReportController();
