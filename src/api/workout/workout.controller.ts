import { type Request, type Response, type NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { WorkoutService } from './workout.service';

export class WorkoutController {
  constructor(private readonly workoutService = new WorkoutService()) {}

  public async get(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const program = await this.workoutService.get(req.params.id);

      return res.json(program);
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
      const programs = await this.workoutService.list();

      return res.json(programs);
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
      const program = await this.workoutService.create(req.body);

      return res.json(program);
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
      const program = await this.workoutService.update(req.params.id, req.body);

      return res.json(program);
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
      await this.workoutService.delete(req.params.id);

      return res.sendStatus(StatusCodes.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }
}
