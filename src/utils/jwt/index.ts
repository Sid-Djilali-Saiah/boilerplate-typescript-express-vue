import { sign, verify } from 'jsonwebtoken';

import User from '@domain/user/entity';

export const createToken = (user: User): string => {
  return sign({}, process.env.JWT_SECRET_TOKEN || '', {
    subject: user.id,
    expiresIn: 3600,
    algorithm: 'HS256',
  });
};

export const verifyToken = (token: string): object | string => {
  return verify(token, process.env.JWT_SECRET_TOKEN || '');
};

export * from '@utils/jwt';
