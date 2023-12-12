import { Router, type Request, type Response, type NextFunction } from 'express';
import { ExerciseController } from './exercise.controller';

const exerciseRouter = Router();
const exerciseController = new ExerciseController();

exerciseRouter.post('/', async (req: Request, res: Response, next: NextFunction) =>
  exerciseController.create(req, res, next)
);

exerciseRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>
  exerciseController.list(req, res, next)
);

exerciseRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) =>
  exerciseController.get(req, res, next)
);

exerciseRouter.patch('/:id', async (req: Request, res: Response, next: NextFunction) =>
  exerciseController.update(req, res, next)
);

exerciseRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) =>
  exerciseController.delete(req, res, next)
);

export default {
  basePath: '/exercise',
  router: exerciseRouter
};
