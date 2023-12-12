import { randomUUID } from 'node:crypto';
import { NotFoundError } from '../../../error/error.service';
import { type WorkoutRepository, type WorkoutEntity } from '../../interface';
import { workoutMock } from '../_mocks/workout.mock';
import { type WorkoutDto } from '../../../api/workout/dto/workout.dto';

class WorkoutMemoryRepository implements WorkoutRepository {
  private readonly storage = new Map(workoutMock);
  private readonly serviceName = WorkoutMemoryRepository.name;

  public async get(id: string): Promise<WorkoutEntity> {
    const workout = this.storage.get(id);
    if (!workout) {
      throw new NotFoundError('Workout not found', this.serviceName);
    }

    return workout;
  }

  public async list(programId?: string): Promise<WorkoutEntity[]> {
    const list = [...this.storage.values()];
    if (programId) {
      return list.filter((w) => w.programId === programId);
    }

    return list;
  }

  public async create(workout: WorkoutDto): Promise<WorkoutEntity> {
    const id = randomUUID();
    this.storage.set(id, { id, ...workout });

    return this.storage.get(id) as WorkoutEntity;
  }

  public async update(
    id: string,
    workout: Partial<Pick<WorkoutDto, 'exercises' | 'dayOfWeek'>>
  ): Promise<WorkoutEntity> {
    const workoutToUpdate = this.storage.get(id);
    if (!workoutToUpdate) {
      throw new NotFoundError('Workout not found', this.serviceName);
    }

    if (Array.isArray(workout.exercises)) {
      // todo better have exercises validation (storage existence)?
      workoutToUpdate.exercises = workout.exercises;
    }
    if (typeof workout.dayOfWeek === 'number') {
      workoutToUpdate.dayOfWeek = workout.dayOfWeek;
    }

    return this.storage.get(id) as WorkoutEntity;
  }

  public async delete(id: string): Promise<void> {
    const workoutToDelete = this.storage.get(id);
    if (!workoutToDelete) {
      throw new NotFoundError('Workout not found', this.serviceName);
    }

    this.storage.delete(id);
  }
}

export default new WorkoutMemoryRepository();
