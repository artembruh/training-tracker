import { BaseService } from '../../base/base.service';
import { type WorkoutTrackDto } from './dto/workout-track.dto';
import { type WorkoutTrackEntity } from '../../database/interface';

export class WorkoutTrackService extends BaseService {
  constructor() {
    super(WorkoutTrackService.name);
  }

  public async track(track: WorkoutTrackDto): Promise<void> {
    await this.dbClient.workoutTrackRepository.create(track);
  }

  public async listAllTracks(): Promise<WorkoutTrackEntity[]> {
    return this.dbClient.workoutTrackRepository.listAll();
  }
}
