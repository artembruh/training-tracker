import { type WorkoutEntity } from '../../../database/interface';

export type WorkoutDto = Pick<WorkoutEntity, 'programId' | 'dayOfWeek' | 'exercises' | 'active'>;
