import { type WorkoutExerciseEntity } from './workout-exercise.interface';
import { type WorkoutExerciseDto } from '../../../api/workout-exercise/dto/workout-exercise.dto';

export interface WorkoutExerciseRepository {
  get: (id: string) => Promise<WorkoutExerciseEntity>;
  findByExerciseId: (exerciseId: string) => Promise<WorkoutExerciseEntity | undefined>;
  list: () => Promise<WorkoutExerciseEntity[]>;
  listByWorkoutId: (workoutId: string) => Promise<WorkoutExerciseEntity[]>;
  create: (exercise: WorkoutExerciseDto) => Promise<WorkoutExerciseEntity>;
  update: (id: string, exercise: WorkoutExerciseDto) => Promise<WorkoutExerciseEntity>;
  delete: (id: string) => Promise<void>;
}
