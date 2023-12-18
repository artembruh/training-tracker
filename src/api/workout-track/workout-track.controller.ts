import { type Request, type Response, type NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { WorkoutTrackService } from './workout-track.service';

export class WorkoutTrackController {
  constructor(private readonly workoutTrackService = new WorkoutTrackService()) {}

  public async track(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      await this.workoutTrackService.track(req.body);

      return res.sendStatus(StatusCodes.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }

  public async listAllTracks(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      return res.json(await this.workoutTrackService.listAllTracks());
    } catch (error) {
      next(error);
    }
  }
}
