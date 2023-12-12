export interface WorkoutTrackEntity {
  id: string;
  date: string;
  exerciseId: string;
  workoutId: string;
  reps: number;
  set: number;
  weight: number;
  weightUnit: string; // kg | lb
}
