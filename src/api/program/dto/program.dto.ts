import { type ProgramEntity } from '../../../database/interface';

export type ProgramDto = Pick<ProgramEntity, 'userId' | 'startDate' | 'name' | 'active'>;
