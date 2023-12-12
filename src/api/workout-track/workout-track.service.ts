import { BaseService } from '../../base/base.service';
import { type WorkoutTrackDto } from './dto/workout-track.dto';

export class WorkoutTrackService extends BaseService {
  constructor() {
    super(WorkoutTrackService.name);
  }

  public async track(track: WorkoutTrackDto): Promise<void> {
    console.log(track);
  }
}
