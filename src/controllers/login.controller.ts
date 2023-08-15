import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getLogin = async (req: Request, res: Response) : Promise<Response | void> => {
  const userObj = req.body;

  const { status, data } = await loginService.getLogin(userObj);

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getLogin,
};