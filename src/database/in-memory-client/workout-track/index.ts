import { randomUUID } from 'node:crypto';
import { NotFoundError } from '../../../error/error.service';
import { type WorkoutTrackRepository, type WorkoutTrackEntity } from '../../interface';
import { type WorkoutTrackDto } from '../../../api/workout-track/dto/workout-track.dto';
import { workoutTrackMock } from '../_mocks/workout-track.mock';

class WorkoutTrackMemoryRepository implements WorkoutTrackRepository {
  private readonly storage = new Map<string, WorkoutTrackEntity>(workoutTrackMock);
  private readonly serviceName = WorkoutTrackMemoryRepository.name;

  public async get(workoutExerciseId: string): Promise<WorkoutTrackEntity> {
    const tracks = this.storage.values();
    for (const track of tracks) {
      if (track.workoutExerciseId === workoutExerciseId) {
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

  public async listAll(): Promise<WorkoutTrackEntity[]> {
    return [...this.storage.values()];
  }
}

export default new WorkoutTrackMemoryRepository();
