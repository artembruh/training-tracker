import { BaseService } from '../../base/base.service';

export class UserService extends BaseService {
  constructor() {
    super(UserService.name);
  }

  public async get(id: string): Promise<any> {
    return this.dbClient.userRepository.get(id);
  }

  public async list(): Promise<any[]> {
    return this.dbClient.userRepository.list();
  }

  public async create(payload: {
    username: string;
    firstname: string;
    lastname: string;
    age: number;
  }): Promise<any> {
    return this.dbClient.userRepository.create(payload);
  }

  public async update(
    id: string,
    payload: {
      firstname?: string;
      lastname?: string;
      age?: number;
    }
  ): Promise<any> {
    return this.dbClient.userRepository.update(id, payload);
  }

  public async delete(id: string): Promise<void> {
    await this.dbClient.userRepository.delete(id);
  }
}
