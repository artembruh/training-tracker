import { type WorkoutTrackEntity } from '../../../database/interface';

export type WorkoutTrackDto = Pick<
  WorkoutTrackEntity,
  'date' | 'exerciseId' | 'workoutId' | 'weight' | 'weightUnit' | 'reps' | 'set'
>;
