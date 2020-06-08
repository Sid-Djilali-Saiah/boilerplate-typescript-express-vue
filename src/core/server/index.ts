import express from 'express';
import CreateDatabaseConnection from '@core/database';
import CreateMiddlewares from '@core/middlewares';

class AppServer {
  private PORT = process.env.PORT ?? 1337;

  private app = express();

  private middlewares = new CreateMiddlewares(this.app);

  async start() {
    console.info('> [server] starting...');
    await CreateDatabaseConnection.start();
    this.middlewares.start();
    this.app.listen(this.PORT, () => console.info(`> [server] started on port: ${this.PORT}`));
  }
}

export default new AppServer();
