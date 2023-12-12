import { type Logger } from 'pino';
import { type HttpLogger, pinoHttp } from 'pino-http';
import { randomUUID } from 'node:crypto';
import { type ErrorService } from '../error/error.service';

class LoggerService {
  private readonly logger: Logger;
  private readonly httpLogger: HttpLogger;

  constructor() {
    this.httpLogger = pinoHttp({
      genReqId: (req, res) => {
        const reqId = req.id ?? req.headers['x-request-id'];
        if (reqId) {
          return reqId;
        }
        const customReqId = randomUUID();
        res.setHeader('x-request-id', customReqId);

        return customReqId;
      }
    });
    this.logger = this.httpLogger.logger;
    this.log('Service started', { serviceName: LoggerService.name });
  }

  public get httpInstance(): HttpLogger {
    return this.httpLogger;
  }

  public log(message: string, opts?: Record<string, string | number>): void {
    this.logger.info(opts, message);
  }

  public warn(message: string, opts?: Record<string, string | number>): void {
    this.logger.warn(opts, message);
  }

  public error(error: ErrorService, message?: string): void {
    this.logger.error(error, message);
  }

  public debug(message: string, opts?: Record<string, string | number>): void {
    this.logger.debug(opts, message);
  }
}

const loggerService = new LoggerService();
export default loggerService;
