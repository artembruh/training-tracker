import { randomUUID } from 'node:crypto';
import { ConflictError, NotFoundError } from '../../../error/error.service';
import { type UserRepository } from '../../interface';
import { userMock } from '../_mocks/user.mock';
import { type UserEntity } from '../../interface/user/user.interface';
import { type UserDto } from '../../../api/user/dto/user.dto';

class UserMemoryRepository implements UserRepository {
  private readonly storage = new Map(userMock);

  private readonly serviceName = UserMemoryRepository.name;

  public async get(id: string): Promise<UserEntity> {
    const user = this.storage.get(id);
    if (!user) {
      throw new NotFoundError('User not found', this.serviceName);
    }

    return user;
  }

  public async list(): Promise<UserEntity[]> {
    return [...this.storage.values()];
  }

  public async create(user: UserDto): Promise<UserEntity> {
    const existingUsers = this.storage.values();
    for (const existingUser of existingUsers) {
      if (existingUser.username === user.username) {
        throw new ConflictError('User already exists with that username', this.serviceName);
      }
    }

    const id = randomUUID();
    this.storage.set(id, { id, ...user });

    return this.storage.get(id) as UserEntity;
  }

  public async update(
    id: string,
    user: Partial<Pick<UserDto, 'firstname' | 'lastname' | 'age'>>
  ): Promise<UserEntity> {
    const userToUpdate = this.storage.get(id);
    if (!userToUpdate) {
      throw new NotFoundError('User not found', this.serviceName);
    }

    this.storage.set(id, {
      ...userToUpdate,
      firstname: user.firstname || userToUpdate.firstname,
      lastname: user.lastname || userToUpdate.lastname,
      age: user.age || userToUpdate.age
    });

    return this.storage.get(id) as UserEntity;
  }

  public async delete(id: string): Promise<void> {
    const userToDelete = this.storage.get(id);
    if (!userToDelete) {
      throw new NotFoundError('User not found', this.serviceName);
    }

    this.storage.delete(id);
  }
}

export default new UserMemoryRepository();
