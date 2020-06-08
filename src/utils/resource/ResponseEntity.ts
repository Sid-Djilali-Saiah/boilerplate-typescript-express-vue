import { Response } from 'express';

import HTTP_STATUS from './HttpStatus.enum';

export default class ResponseEntity {
  static resolve(body: { status: number; message: string }, response: Response): Response {
    return response.status(body.status).json(body);
  }

  static ok<T>(body?: T, response?: Response): Response<T> | undefined {
    return response?.status(HTTP_STATUS.OK).json({
      status: HTTP_STATUS.OK,
      message: 'ok',
      data: body,
    });
  }

  static created<T>(body?: T, response?: Response): Response<T> | undefined {
    return response?.status(HTTP_STATUS.CREATED).json({
      status: HTTP_STATUS.CREATED,
      message: 'ok',
      data: body,
    });
  }

  static badRequest<T>(response?: Response): Response<T> | undefined {
    return response?.status(HTTP_STATUS.BAD_REQUEST).json({
      status: HTTP_STATUS.BAD_REQUEST,
      message: 'Bad Request',
    });
  }

  static notFound<T>(response?: Response, message = 'Not Found!'): Response<T> | undefined {
    return response?.status(HTTP_STATUS.NOT_FOUND).json({
      status: HTTP_STATUS.NOT_FOUND,
      message,
    });
  }

  static conflict<T>(
    response?: Response,
    message = 'Resource already registered!',
  ): Response<T> | undefined {
    return response?.status(HTTP_STATUS.CONFLICT).json({
      status: HTTP_STATUS.CONFLICT,
      message,
    });
  }
}
