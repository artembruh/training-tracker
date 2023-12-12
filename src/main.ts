import 'dotenv/config';
import http from 'node:http';
import app from './api/app/app.service';
import LoggerService from './logger/logger.service';

const server = http.createServer(app.expressInstance);
server.listen(app.port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: any): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const port = String(app.port);
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? addr : String(addr?.port);
  LoggerService.log(`App started successfully on port: ${bind}`, {});
}
