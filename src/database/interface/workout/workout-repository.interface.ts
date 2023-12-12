import { type WorkoutEntity } from './workout.interface';
import { type WorkoutDto } from '../../../api/workout/dto/workout.dto';

export interface WorkoutRepository {
  get: (id: string) => Promise<WorkoutEntity>;
  list: (programId?: string) => Promise<WorkoutEntity[]>;
  delete: (id: string) => Promise<void>;
  create: (workout: WorkoutDto) => Promise<WorkoutEntity>;
  update: (
    id: string,
    workout: Partial<Pick<WorkoutDto, 'exercises' | 'dayOfWeek'>>
  ) => Promise<WorkoutEntity>;
}
