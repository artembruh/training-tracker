import { type Request, type Response, type NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ProgramService } from './program.service';
import { WorkoutService } from '../workout/workout.service';
import { ExerciseService } from '../exercise/exercise.service';
import { WorkoutExerciseService } from '../workout-exercise/workout-exercise.service';
import {
  type ExerciseEntity,
  type WorkoutEntity,
  type WorkoutExerciseEntity
} from '../../database/interface';

export class ProgramController {
  constructor(
    private readonly programService = new ProgramService(),
    private readonly workoutService = new WorkoutService(),
    private readonly exerciseService = new ExerciseService(),
    private readonly workoutExerciseService = new WorkoutExerciseService()
  ) {}

  public async get(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const programId = req.params.id;
      const [program, workouts] = await Promise.all([
        this.programService.get(programId),
        this.workoutService.getProgramWorkouts(programId)
      ]);

      const workoutWithExercises: Array<
        Omit<WorkoutEntity, 'exercises'> & {
          exercises: Array<WorkoutExerciseEntity & { info: ExerciseEntity }>;
        }
      > = await Promise.all(
        workouts.map(async (workout) => {
          const workoutExercises = await this.workoutExerciseService.listByWorkoutId(workout.id);
          const workoutExercisesWithInfo = await Promise.all(
            workoutExercises.map(async (we) => {
              const exerciseInfo = await this.exerciseService.get(we.exerciseId);

              return { ...we, info: exerciseInfo };
            })
          );

          return { ...workout, exercises: workoutExercisesWithInfo };
        })
      );

      return res.json({ ...program, workout: workoutWithExercises });
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
      const programs = await this.programService.list();

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
      const program = await this.programService.create(req.body);

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
      const program = await this.programService.update(req.params.id, req.body);

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
      await this.programService.delete(req.params.id);

      return res.sendStatus(StatusCodes.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }
}
