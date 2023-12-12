export interface WorkoutEntity {
  id: string;
  programId: string;
  dayOfWeek: number; // 0-6
  exercises: string[]; // array of exercise ids
  active: boolean;
}
