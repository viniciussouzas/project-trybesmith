import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/orders', ordersController.getAll);

export default ordersRouter;
