import { Router, type Request, type Response, type NextFunction } from 'express';
import { WorkoutTrackController } from './workout-track.controller';

const workoutTrackRouter = Router();
const workoutTrackController = new WorkoutTrackController();

workoutTrackRouter.post('/track', async (req: Request, res: Response, next: NextFunction) =>
  workoutTrackController.track(req, res, next)
);

workoutTrackRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>
  workoutTrackController.listAllTracks(req, res, next)
);

export default {
  basePath: '/workout-track',
  router: workoutTrackRouter
};
