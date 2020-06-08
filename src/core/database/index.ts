import { Connection, createConnection } from 'typeorm';

class CreateDatabaseConnection {
  private connection!: Connection;

  async start() {
    console.info('> [database] starting...');
    try {
      this.connection = await createConnection();
      console.info(`> [database] conected!`);
    } catch (e) {
      console.info('> [database] failed to start a database connection!', e);
    }
  }

  async stop() {
    console.info('> [database] stoping...');
    await this.connection.close();
    console.info('> [database] connectiond closed!');
  }
}

export default new CreateDatabaseConnection();
