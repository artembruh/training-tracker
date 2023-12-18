import { type WorkoutTrackEntity } from './workout-track.interface';
import { type WorkoutTrackDto } from '../../../api/workout-track/dto/workout-track.dto';

export interface WorkoutTrackRepository {
  create: (track: WorkoutTrackDto) => Promise<WorkoutTrackEntity>;
  get: (workoutId: string, exerciseId: string) => Promise<WorkoutTrackEntity>;
  listAll: () => Promise<WorkoutTrackEntity[]>;
}
