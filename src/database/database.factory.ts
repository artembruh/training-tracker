import { type DatabaseClient } from './interface';
import { DatabaseClientType } from './enum/database-client-type.enum';
import { MemoryDatabaseClient } from './in-memory-client/in-memory-database-client';

export class DatabaseFactory {
  public static getClient(clientType: DatabaseClientType): DatabaseClient {
    switch (clientType) {
      case DatabaseClientType.MEMORY: {
        return new MemoryDatabaseClient();
      }
      /*
      case DatabaseClientType.DATABASE: {
        ConfigService.checkEnv(['POSTGRES_PORT', 'POSTGRES_HOST',..., etc.])
        return new PostgresDatabaseClient();
      }
      */
      default: {
        throw new Error(`${clientType} is not implemented`);
      }
    }
  }
}
