import { BaseService } from '../../base/base.service';
import { type WorkoutEntity } from '../../database/interface';
import { type WorkoutDto } from './dto/workout.dto';

export class WorkoutService extends BaseService {
  constructor() {
    super(WorkoutService.name);
  }

  public async get(id: string): Promise<WorkoutEntity> {
    return this.dbClient.workoutRepository.get(id);
  }

  public async getProgramWorkouts(programId: string): Promise<WorkoutEntity[]> {
    return this.dbClient.workoutRepository.list(programId);
  }

  public async list(): Promise<WorkoutEntity[]> {
    return this.dbClient.workoutRepository.list();
  }

  public async create(payload: WorkoutDto): Promise<WorkoutEntity> {
    return this.dbClient.workoutRepository.create(payload);
  }

  public async update(id: string, payload: WorkoutDto): Promise<WorkoutEntity> {
    return this.dbClient.workoutRepository.update(id, payload);
  }

  public async delete(id: string): Promise<void> {
    await this.dbClient.workoutRepository.delete(id);
  }
}
