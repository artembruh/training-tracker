import LoggerService from '../logger/logger.service';
import { DatabaseFactory } from '../database/database.factory';
import { ConfigService } from '../config/config.service';
import { type DatabaseClientType } from '../database/enum/database-client-type.enum';
import { type DatabaseClient } from '../database/interface';

export class BaseService {
  protected _serviceName?: string;
  protected logger: typeof LoggerService;
  protected dbClient: DatabaseClient;

  protected constructor(name: string) {
    this._serviceName = name;
    this.logger = LoggerService;

    ConfigService.checkEnv(['DATABASE_CLIENT_TYPE']);
    this.dbClient = DatabaseFactory.getClient(
      process.env.DATABASE_CLIENT_TYPE as DatabaseClientType
    );

    this.logger.log('Service started', { serviceName: this.serviceName });
  }

  public get serviceName(): string {
    return this._serviceName as string;
  }
}
