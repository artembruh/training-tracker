import { type UserEntity } from '../../../database/interface';

export type UserDto = Pick<UserEntity, 'username' | 'firstname' | 'lastname' | 'age'>;
