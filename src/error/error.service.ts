import { type NextFunction, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoggerService from '../logger/logger.service';

export class ErrorService extends Error {
  private readonly statusCode: number;
  private readonly serviceName: string;
  constructor(config: { serviceName?: string; message?: string; statusCode?: number }) {
    super(config.message || 'unknown-error');
    this.serviceName = config.serviceName || 'unknown-service';
    this.statusCode = config.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    this.name = Error.name;
    Error.captureStackTrace(this);
  }

  static errorHandler(
    err: ErrorService,
    req: Request,
    res: Response,
    _next: NextFunction
  ): Response | undefined {
    if (res.headersSent) {
      LoggerService.error(err);

      return;
    }

    return res
      .status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .error({ message: err.message, serviceName: err.serviceName });
  }
}

export class NotFoundError extends ErrorService {
  constructor(message: string, serviceName: string) {
    super({
      message,
      serviceName,
      statusCode: StatusCodes.NOT_FOUND
    });
  }
}

export class ConflictError extends ErrorService {
  constructor(message: string, serviceName: string) {
    super({
      message,
      serviceName,
      statusCode: StatusCodes.CONFLICT
    });
  }
}
