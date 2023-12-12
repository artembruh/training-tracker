import { randomUUID } from 'node:crypto';
import { NotFoundError } from '../../../error/error.service';
import { type WorkoutTrackRepository, type WorkoutTrackEntity } from '../../interface';
import { type WorkoutTrackDto } from '../../../api/workout-track/dto/workout-track.dto';

class WorkoutTrackMemoryRepository implements WorkoutTrackRepository {
  private readonly storage = new Map<string, WorkoutTrackEntity>();
  private readonly serviceName = WorkoutTrackMemoryRepository.name;

  public async get(workoutId: string, exerciseId: string): Promise<WorkoutTrackEntity> {
    const tracks = this.storage.values();
    for (const track of tracks) {
      if (track.workoutId === workoutId && track.exerciseId === exerciseId) {
        return track;
      }
    }

    throw new NotFoundError('Workout Track not found', this.serviceName);
  }

  public async create(track: WorkoutTrackDto): Promise<WorkoutTrackEntity> {
    const id = randomUUID();
    this.storage.set(id, { id, ...track });

    return this.storage.get(id) as WorkoutTrackEntity;
  }
}

export default new WorkoutTrackMemoryRepository();
