import { type ExerciseEntity } from './exercise.interface';
import { type ExerciseDto } from '../../../api/exercise/dto/exercise.dto';

export interface ExerciseRepository {
  get: (id: string) => Promise<ExerciseEntity>;
  list: () => Promise<ExerciseEntity[]>;
  create: (exercise: ExerciseDto) => Promise<ExerciseEntity>;
  update: (id: string, exercise: ExerciseDto) => Promise<ExerciseEntity>;
  delete: (id: string) => Promise<void>;
}
