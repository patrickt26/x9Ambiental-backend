// import { where, col } from 'sequelize';
// import { differenceInHours, parseISO } from 'date-fns';
import * as Yup from 'yup';

import Report from '../models/Report';
// import User from '../models/User';

class ReportController {
  async index(req, res) {
    const reports = await Report.findAll({
      where: { resolved_at: null },
      order: [['createdAt', 'DESC']],
    });

    return res.json(reports);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      address: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      crime_type: Yup.string().required(),
      crime_zone: Yup.string().required(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const report = await Report.create(req.body);

    return res.json(report);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const report = await Report.findByPk(req.params.id);

    if (report.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to mark resolved this report",
      });
    }

    await report.update(req.body);

    return res.json(report);
  }

  async delete(req, res) {
    const report = await Report.findByPk(req.params.id);

    if (report.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to mark resolved this report",
      });
    }

    report.resolved_at = new Date();

    await report.save();

    return res.json(report);
  }
}

export default new ReportController();
