import AppServer from '@core/server';

try {
  AppServer.start();
} catch (error) {
  console.info('💣[MAIN]💣', error);
}
