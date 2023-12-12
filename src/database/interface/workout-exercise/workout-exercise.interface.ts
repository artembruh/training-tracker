export interface WorkoutExerciseEntity {
  id: string;
  exerciseId: string;
  workoutId: string;
  reps: number;
  sets: number;
  rpe: number;
  rest: number;
}
