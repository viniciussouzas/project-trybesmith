import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 12;

const validPassword = 'xablau123';

const tokenMock = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY4Njc1NDc1Nn0.jqAuJkcLp0RuvrOd4xKxtj_lm3Z3-73gQQ9IVmwE5gA"
};

const userObj = {
  username: "Hangar",
  password: validPassword
};

const invalidUserObj = {
  username: "Xablau",
  password: "xablau123"
}

const validLoginResponse = {
  id: 1,
  username: "Hangar",
  vocation: "Guerreiro",
  level: 100,
  password: bcrypt.hashSync(validPassword, SALT_ROUNDS),
}

const invalidLoginResponse = {
  id: 1,
  username: "Xablau",
  vocation: "Xablauleiro",
  level: 100,
  password: "123456",
}

export default {
  tokenMock,
  userObj,
  invalidUserObj,
  validLoginResponse,
  invalidLoginResponse
}