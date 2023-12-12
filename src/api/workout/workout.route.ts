import { Router, type Request, type Response, type NextFunction } from 'express';
import { WorkoutController } from './workout.controller';

const workoutRouter = Router();
const workoutController = new WorkoutController();

workoutRouter.post('/', async (req: Request, res: Response, next: NextFunction) =>
  workoutController.create(req, res, next)
);

workoutRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>
  workoutController.list(req, res, next)
);

workoutRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) =>
  workoutController.get(req, res, next)
);

workoutRouter.patch('/:id', async (req: Request, res: Response, next: NextFunction) =>
  workoutController.update(req, res, next)
);

workoutRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) =>
  workoutController.delete(req, res, next)
);

export default {
  basePath: '/workout',
  router: workoutRouter
};
