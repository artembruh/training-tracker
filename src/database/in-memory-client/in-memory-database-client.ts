import {
  type DatabaseClient,
  type UserRepository,
  type ProgramRepository,
  type WorkoutRepository,
  type ExerciseRepository,
  type WorkoutExerciseRepository,
  type WorkoutTrackRepository
} from '../interface';
import userRepository from './user';
import programRepository from './program';
import workoutRepository from './workout';
import exerciseRepository from './exercise';
import workoutExerciseRepository from './workout-exercise';
import workoutTrackRepository from './workout-track';

export class MemoryDatabaseClient implements DatabaseClient {
  public get userRepository(): UserRepository {
    return userRepository;
  }

  public get programRepository(): ProgramRepository {
    return programRepository;
  }

  public get workoutRepository(): WorkoutRepository {
    return workoutRepository;
  }

  public get exerciseRepository(): ExerciseRepository {
    return exerciseRepository;
  }

  public get workoutExerciseRepository(): WorkoutExerciseRepository {
    return workoutExerciseRepository;
  }

  public get workoutTrackRepository(): WorkoutTrackRepository {
    return workoutTrackRepository;
  }
}
