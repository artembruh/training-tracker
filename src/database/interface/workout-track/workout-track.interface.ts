export interface WorkoutTrackEntity {
  id: string;
  date: string;
  workoutExerciseId: string;
  reps: number;
  set: number;
  weight: number;
  weightUnit: string; // kg | lb
}
