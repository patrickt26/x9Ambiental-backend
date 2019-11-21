import { Router } from 'express';

import ReportController from './app/controllers/ReportController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CrimeTypeController from './app/controllers/CrimeTypeController';
import CrimeZoneController from './app/controllers/CrimeZoneController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users/:id', UserController.update);

routes.get('/reports', ReportController.index);
routes.post('/reports', ReportController.store);
routes.put('/reports/:id', ReportController.update);
routes.delete('/reports/:id', ReportController.delete);

routes.get('/crimeTypes', CrimeTypeController.index);
routes.post('/crimeTypes', CrimeTypeController.store);
routes.put('/crimeTypes/:id', CrimeTypeController.update);

routes.get('/crimeZones', CrimeZoneController.index);
routes.post('/crimeZones', CrimeZoneController.store);
routes.put('/crimeZones/:id', CrimeZoneController.update);

export default routes;
