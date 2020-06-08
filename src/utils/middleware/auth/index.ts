import { Response, NextFunction } from 'express';

import { verifyToken } from '@utils/jwt';
import HttpError from '@utils/errors/HttpError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: any,
  _response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new HttpError(401, 'JWT token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verifyToken(token);

    const { sub } = decoded as ITokenPayload;

    request.user = { id: sub };

    return next();
  } catch {
    throw new HttpError(401, 'Invalid JWT Token!');
  }
}
