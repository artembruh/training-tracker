import { Router, type Request, type Response, type NextFunction } from 'express';
import { ProgramController } from './program.controller';

const programRouter = Router();
const programController = new ProgramController();

programRouter.post('/', async (req: Request, res: Response, next: NextFunction) =>
  programController.create(req, res, next)
);

programRouter.get('/', async (req: Request, res: Response, next: NextFunction) =>
  programController.list(req, res, next)
);

programRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) =>
  programController.get(req, res, next)
);

programRouter.patch('/:id', async (req: Request, res: Response, next: NextFunction) =>
  programController.update(req, res, next)
);

programRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) =>
  programController.delete(req, res, next)
);

export default {
  basePath: '/program',
  router: programRouter
};
