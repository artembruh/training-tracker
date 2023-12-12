import express, { type Express, type NextFunction, type Request, type Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import appRouter from './app.route';
import { BaseService } from '../../base/base.service';
import { ConfigService } from '../../config/config.service';
import { ErrorService } from '../../error/error.service';
import LoggerService from '../../logger/logger.service';

class App extends BaseService {
  private readonly _expressInstance: Express;
  private readonly defaultPort: string = '3000';
  private appPort: string | number = this.defaultPort;

  constructor() {
    super(App.name);
    ConfigService.checkEnv(['SWAGGER_UI_USER', 'SWAGGER_UI_PASSWORD']);
    const app = express();
    app.use(LoggerService.httpInstance);
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());
    app.use('/api/v1', appRouter);
    app.use((err: ErrorService, req: Request, res: Response, next: NextFunction) => {
      LoggerService.error(err);

      ErrorService.errorHandler(err, req, res, next);
    });

    this._expressInstance = app;
    this.setAppPort();
  }

  public get expressInstance(): Express {
    return this._expressInstance;
  }

  private setAppPort(): void {
    const port = parseInt(process.env.PORT || this.defaultPort);
    if (isNaN(port)) {
      throw new Error('Port value is incorrect');
    }
    this.appPort = port;
    this._expressInstance.set('port', port);
  }

  public get port(): string | number {
    return this.appPort;
  }
}

const app = new App();
export default app;
