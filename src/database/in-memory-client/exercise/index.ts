import { randomUUID } from 'node:crypto';
import { NotFoundError } from '../../../error/error.service';
import { type ExerciseEntity, type ExerciseRepository } from '../../interface';
import { exerciseMock } from '../_mocks/exercise.mock';
import { type ExerciseDto } from '../../../api/exercise/dto/exercise.dto';

class ExerciseMemoryRepository implements ExerciseRepository {
  private readonly storage = new Map(exerciseMock);
  private readonly serviceName = ExerciseMemoryRepository.name;

  public async get(id: string): Promise<ExerciseEntity> {
    const exercise = this.storage.get(id);
    if (!exercise) {
      throw new NotFoundError('Exercise not found', this.serviceName);
    }

    return exercise;
  }

  public async list(): Promise<ExerciseEntity[]> {
    return [...this.storage.values()];
  }

  public async create(exercise: ExerciseDto): Promise<ExerciseEntity> {
    const id = randomUUID();
    this.storage.set(id, { id, ...exercise });

    return this.storage.get(id) as ExerciseEntity;
  }

  public async update(id: string, exercise: ExerciseDto): Promise<ExerciseEntity> {
    const exerciseToUpdate = this.storage.get(id);
    if (!exerciseToUpdate) {
      throw new NotFoundError('Exercise not found', this.serviceName);
    }

    // todo update mechanism

    return this.storage.get(id) as ExerciseEntity;
  }

  public async delete(id: string): Promise<void> {
    const exerciseToDelete = this.storage.get(id);
    if (!exerciseToDelete) {
      throw new NotFoundError('Exercise not found', this.serviceName);
    }

    this.storage.delete(id);
  }
}

export default new ExerciseMemoryRepository();
