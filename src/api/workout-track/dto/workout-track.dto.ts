import { type WorkoutTrackEntity } from '../../../database/interface';

export type WorkoutTrackDto = Pick<
  WorkoutTrackEntity,
  'date' | 'workoutExerciseId' | 'weight' | 'weightUnit' | 'reps' | 'set'
>;
