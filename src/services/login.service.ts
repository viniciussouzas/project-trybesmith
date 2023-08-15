import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceType';
import { TokenType } from '../types/TokenType';
import jwt from '../utils/jwt.token';
import { Login } from '../types/Login';

const getLogin = async (userObj: Login) : Promise<ServiceResponse<TokenType>> => {
  const user = await UserModel.findOne({ where: { username: userObj.username } });

  if (!user || !bcrypt.compareSync(userObj.password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { username, password } = user.dataValues;

  const signedToken = jwt.sign({ username, password });
  const token: TokenType = { token: signedToken };

  return { status: 'SUCCESSFUL', data: token };
};

export default {
  getLogin,
};