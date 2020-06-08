import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as Sentry from '@sentry/node';

import 'reflect-metadata';
import 'express-async-errors';
import '@utils/container';

import requestErrorHandler from '@utils/middleware';
import routes from '../../routes';

type Express = {
  use<T>(data: T): void;
};

export default class CreateMiddlewares {
  constructor(private app: Express) {}

  start(): void {
    console.info('> [middlewares] starting...');
    dotenv.config();
    Sentry.init({ dsn: process.env.SENTRY_KEY });
    this.app.use(
      Sentry.Handlers.requestHandler({
        ip: true,
        request: true,
        serverName: true,
        transaction: true,
        user: true,
        version: true,
      }) as express.RequestHandler,
    );
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(routes);
    this.app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);
    this.app.use(requestErrorHandler);
    console.info('> [middlewares] configured!');
  }
}
