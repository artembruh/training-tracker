import { randomUUID } from 'node:crypto';
import { NotFoundError } from '../../../error/error.service';
import { type ProgramRepository, type ProgramEntity } from '../../interface';
import { type ProgramDto } from '../../../api/program/dto/program.dto';
import { programMock } from '../_mocks/program.mock';

class ProgramMemoryRepository implements ProgramRepository {
  private readonly storage = new Map(programMock);

  private readonly serviceName = ProgramMemoryRepository.name;

  public async get(id: string): Promise<ProgramEntity> {
    const program = this.storage.get(id);
    if (!program) {
      throw new NotFoundError('Program not found', this.serviceName);
    }

    return program;
  }

  public async list(): Promise<ProgramEntity[]> {
    return [...this.storage.values()];
  }

  public async create(program: ProgramDto): Promise<ProgramEntity> {
    const id = randomUUID();
    const programRecord = {
      id,
      userId: program.userId,
      name: program.name,
      startDate: program.startDate
        ? new Date(program.startDate).toISOString()
        : new Date().toISOString(),
      active: program.active
    };
    this.storage.set(id, programRecord);

    return this.storage.get(id) as ProgramEntity;
  }

  public async update(id: string, program: ProgramDto): Promise<ProgramEntity> {
    // todo update mechanism

    return this.storage.get(id) as ProgramEntity;
  }

  public async delete(id: string): Promise<void> {
    const programToDelete = this.storage.get(id);
    if (!programToDelete) {
      throw new NotFoundError('Program not found', this.serviceName);
    }

    this.storage.delete(id);
  }
}

export default new ProgramMemoryRepository();
