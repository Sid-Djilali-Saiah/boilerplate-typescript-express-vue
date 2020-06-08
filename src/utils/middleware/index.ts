import { Request, Response, NextFunction } from 'express';

import ResponseEntity from '@utils/resource/ResponseEntity';
import HttpException from '@utils/errors/HttpError';

const errorMiddleware = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction,
): Response => {
  const { status = 500, message = 'Internal Server Error' } = error;
  // eslint-disable-next-line no-console
  console.error('ERROR=', error);
  return ResponseEntity.resolve({ status, message }, response);
};

export default errorMiddleware;
