import { Router, type Request, type Response, type NextFunction } from 'express';
import { WorkoutExerciseController } from './workout-exercise.controller';

const workoutExerciseRouter = Router();
const workoutExerciseController = new WorkoutExerciseController();

workoutExerciseRouter.post('/', async (req: Request, res: Response, next: NextFunction) =>
  workoutExerciseController.create(req, res, next)
);

workoutExerciseRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>
  workoutExerciseController.list(req, res, next)
);

workoutExerciseRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) =>
  workoutExerciseController.get(req, res, next)
);

workoutExerciseRouter.patch('/:id', async (req: Request, res: Response, next: NextFunction) =>
  workoutExerciseController.update(req, res, next)
);

workoutExerciseRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) =>
  workoutExerciseController.delete(req, res, next)
);

export default {
  basePath: '/workout-exercise',
  router: workoutExerciseRouter
};
