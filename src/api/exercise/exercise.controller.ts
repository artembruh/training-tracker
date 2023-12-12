import { type Request, type Response, type NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ExerciseService } from './exercise.service';

export class ExerciseController {
  constructor(private readonly exerciseService = new ExerciseService()) {}

  public async get(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const exercise = await this.exerciseService.get(req.params.id);

      return res.json(exercise);
    } catch (error) {
      next(error);
    }
  }

  public async list(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const exercises = await this.exerciseService.list();

      return res.json(exercises);
    } catch (error) {
      next(error);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const exercise = await this.exerciseService.create(req.body);

      return res.json(exercise);
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const exercise = await this.exerciseService.update(req.params.id, req.body);

      return res.json(exercise);
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      await this.exerciseService.delete(req.params.id);

      return res.sendStatus(StatusCodes.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }
}
