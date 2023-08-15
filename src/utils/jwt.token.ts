import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret123';

type TokenPayload = {
  username: string,
  password: string,
};

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): TokenPayload {
  const decoded = jwt.verify(token, secret) as TokenPayload;
  return decoded;
}

export default {
  sign,
  verify,
};