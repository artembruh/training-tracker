import { Router, type Request, type Response, type NextFunction } from 'express';
import { UserController } from './user.controller';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', async (req: Request, res: Response, next: NextFunction) =>
  userController.create(req, res, next)
);

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>
  userController.list(req, res, next)
);

userRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) =>
  userController.get(req, res, next)
);

userRouter.patch('/:id', async (req: Request, res: Response, next: NextFunction) =>
  userController.update(req, res, next)
);

userRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) =>
  userController.delete(req, res, next)
);

export default {
  basePath: '/user',
  router: userRouter
};
