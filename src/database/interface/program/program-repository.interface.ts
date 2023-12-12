import { type ProgramEntity } from './program.interface';
import { type ProgramDto } from '../../../api/program/dto/program.dto';

export interface ProgramRepository {
  create: (program: ProgramDto) => Promise<ProgramEntity>;
  list: () => Promise<ProgramEntity[]>;
  get: (id: string) => Promise<ProgramEntity>;
  update: (id: string, program: ProgramDto) => Promise<ProgramEntity>;
  delete: (id: string) => Promise<void>;
}
