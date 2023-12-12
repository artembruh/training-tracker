import { type UserEntity } from './user.interface';
import { type UserDto } from '../../../api/user/dto/user.dto';

export interface UserRepository {
  get: (id: string) => Promise<UserEntity>;
  list: () => Promise<UserEntity[]>;
  create: (user: UserDto) => Promise<UserEntity>;
  update: (
    id: string,
    user: Partial<Pick<UserDto, 'firstname' | 'lastname' | 'age'>>
  ) => Promise<UserEntity>;
  delete: (id: string) => Promise<void>;
}
