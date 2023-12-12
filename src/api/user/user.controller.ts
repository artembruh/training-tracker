import { type Request, type Response, type NextFunction } from 'express';
import { UserService } from './user.service';
import { StatusCodes } from 'http-status-codes';

export class UserController {
  constructor(private readonly userService = new UserService()) {}

  public async get(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const user = await this.userService.get(req.params.id);

      return res.json(user);
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
      const users = await this.userService.list();

      return res.json(users);
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
      const user = await this.userService.create(req.body);

      return res.json(user);
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
      const user = await this.userService.update(req.params.id, req.body);

      return res.json(user);
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
      await this.userService.delete(req.params.id);

      return res.sendStatus(StatusCodes.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }
}
