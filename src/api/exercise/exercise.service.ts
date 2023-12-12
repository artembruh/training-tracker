import { BaseService } from '../../base/base.service';
import { type ExerciseEntity } from '../../database/interface';
import { type ExerciseDto } from './dto/exercise.dto';

export class ExerciseService extends BaseService {
  constructor() {
    super(ExerciseService.name);
  }

  public async get(id: string): Promise<ExerciseEntity> {
    return this.dbClient.exerciseRepository.get(id);
  }

  public async list(): Promise<ExerciseEntity[]> {
    return this.dbClient.exerciseRepository.list();
  }

  public async create(payload: ExerciseDto): Promise<ExerciseEntity> {
    return this.dbClient.exerciseRepository.create(payload);
  }

  public async update(id: string, payload: ExerciseDto): Promise<ExerciseEntity> {
    return this.dbClient.exerciseRepository.update(id, payload);
  }

  public async delete(id: string): Promise<void> {
    await this.dbClient.exerciseRepository.delete(id);
  }
}
