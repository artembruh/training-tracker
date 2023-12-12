import { BaseService } from '../../base/base.service';
import { type WorkoutExerciseEntity } from '../../database/interface';
import { type WorkoutExerciseDto } from './dto/workout-exercise.dto';

export class WorkoutExerciseService extends BaseService {
  constructor() {
    super(WorkoutExerciseService.name);
  }

  public async get(id: string): Promise<WorkoutExerciseEntity> {
    return this.dbClient.workoutExerciseRepository.get(id);
  }

  public async listByWorkoutId(workoutId: string): Promise<WorkoutExerciseEntity[]> {
    return this.dbClient.workoutExerciseRepository.listByWorkoutId(workoutId);
  }

  public async list(): Promise<WorkoutExerciseEntity[]> {
    return this.dbClient.workoutExerciseRepository.list();
  }

  public async create(payload: WorkoutExerciseDto): Promise<WorkoutExerciseEntity> {
    return this.dbClient.workoutExerciseRepository.create(payload);
  }

  public async update(id: string, payload: WorkoutExerciseDto): Promise<WorkoutExerciseEntity> {
    return this.dbClient.workoutExerciseRepository.update(id, payload);
  }

  public async delete(id: string): Promise<void> {
    await this.dbClient.workoutExerciseRepository.delete(id);
  }
}
