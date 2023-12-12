import { type UserRepository } from './user/user-repository.interface';
import { type ProgramRepository } from './program/program-repository.interface';
import { type WorkoutRepository } from './workout/workout-repository.interface';
import { type ExerciseRepository } from './exercise/exercise-repository.interface';
import { type WorkoutExerciseRepository } from './workout-exercise/workout-exercise-repository.interface';
import { type WorkoutTrackRepository } from './workout-track/workout-track-repository.interface';

export interface DatabaseClient {
  userRepository: UserRepository;
  programRepository: ProgramRepository;
  workoutRepository: WorkoutRepository;
  exerciseRepository: ExerciseRepository;
  workoutExerciseRepository: WorkoutExerciseRepository;
  workoutTrackRepository: WorkoutTrackRepository;
}
