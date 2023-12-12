import { randomUUID } from 'node:crypto';
import { NotFoundError } from '../../../error/error.service';
import { type WorkoutExerciseRepository, type WorkoutExerciseEntity } from '../../interface';
import { workoutExerciseMock } from '../_mocks/workout-exercise.mock';
import { type WorkoutExerciseDto } from '../../../api/workout-exercise/dto/workout-exercise.dto';

class WorkoutExerciseMemoryRepository implements WorkoutExerciseRepository {
  private readonly storage = new Map(workoutExerciseMock);
  private readonly serviceName = WorkoutExerciseMemoryRepository.name;

  public async get(id: string): Promise<any> {
    const program = this.storage.get(id);
    if (!program) {
      throw new NotFoundError('Workout Exercise not found', this.serviceName);
    }

    return program;
  }

  public async findByExerciseId(exerciseId: string): Promise<WorkoutExerciseEntity | undefined> {
    const exercises = await this.list();

    return exercises.find((exercise) => exercise.exerciseId === exerciseId);
  }

  public async list(): Promise<WorkoutExerciseEntity[]> {
    return [...this.storage.values()];
  }

  public async listByWorkoutId(workoutId: string): Promise<WorkoutExerciseEntity[]> {
    const exercises = await this.list();

    return exercises.filter((exercise) => exercise.workoutId === workoutId);
  }

  public async create(exercise: WorkoutExerciseDto): Promise<WorkoutExerciseEntity> {
    const id = randomUUID();
    this.storage.set(id, { id, ...exercise });

    return this.storage.get(id) as WorkoutExerciseEntity;
  }

  public async update(id: string, exercise: WorkoutExerciseDto): Promise<WorkoutExerciseEntity> {
    const exerciseToUpdate = this.storage.get(id);
    if (!exerciseToUpdate) {
      throw new NotFoundError('Workout Exercise not found', this.serviceName);
    }

    // todo update mechanism

    return this.storage.get(id) as WorkoutExerciseEntity;
  }

  public async delete(id: string): Promise<void> {
    const exerciseToDelete = this.storage.get(id);
    if (!exerciseToDelete) {
      throw new NotFoundError('Workout Exercise not found', this.serviceName);
    }

    this.storage.delete(id);
  }
}

export default new WorkoutExerciseMemoryRepository();
