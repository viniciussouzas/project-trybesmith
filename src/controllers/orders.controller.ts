import { Request, Response } from 'express';

import ordersService from '../services/orders.service'; 
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAll = async (req: Request, res: Response) => {
  const { status, data } = await ordersService.getAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getAll,
};