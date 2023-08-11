import { Request, Response } from 'express';

import productsService from '../services/products.service'; 
import mapStatusHTTP from '../utils/mapStatusHTTP';

const create = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;

  const { status, data } = await productsService.create({ name, price, orderId });

  return res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req: Request, res: Response) => {
  const { status, data } = await productsService.getAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  create,
  getAll,
};