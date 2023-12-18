import { BaseService } from '../../base/base.service';
import { type ProgramEntity } from '../../database/interface';
import { type ProgramDto } from './dto/program.dto';

export class ProgramService extends BaseService {
  constructor() {
    super(ProgramService.name);
  }

  public async get(id: string): Promise<ProgramEntity> {
    return this.dbClient.programRepository.get(id);
  }

  public async list(): Promise<ProgramEntity[]> {
    return this.dbClient.programRepository.list();
  }

  public async create(payload: ProgramDto): Promise<ProgramEntity> {
    return this.dbClient.programRepository.create(payload);
  }

  public async update(id: string, payload: ProgramDto): Promise<ProgramEntity> {
    return this.dbClient.programRepository.update(id, payload);
  }

  public async delete(id: string): Promise<void> {
    await this.dbClient.programRepository.delete(id);
  }
}
