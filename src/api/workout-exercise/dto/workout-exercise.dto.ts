import { type WorkoutExerciseEntity } from '../../../database/interface';

export type WorkoutExerciseDto = Pick<
  WorkoutExerciseEntity,
  'rest' | 'reps' | 'sets' | 'rpe' | 'exerciseId' | 'workoutId'
>;
