import { type ExerciseEntity } from '../../../database/interface';

export type ExerciseDto = Pick<ExerciseEntity, 'name' | 'description' | 'video'>;
