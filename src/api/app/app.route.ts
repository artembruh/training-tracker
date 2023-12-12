import express from 'express';
import swaggerUi from 'swagger-ui-express';
import basicAuth from 'express-basic-auth';
import swaggerDoc from '../../swagger';
import { type RouterConfig } from '../../types/router-config.interface';
import userRoute from '../user/user.route';
import workoutRoute from '../workout/workout.route';
import programRoute from '../program/program.route';
import exerciseRoute from '../exercise/exercise.route';
import workoutExerciseRoute from '../workout-exercise/workout-exercise.route';
import workoutTrackRoute from '../workout-track/workout-track.route';

const appRouter = express.Router();

appRouter.use(swaggerUi.serve);
appRouter.get(
  '/docs',
  basicAuth({
    challenge: true,
    users: {
      [process.env.SWAGGER_UI_USER as string]: process.env.SWAGGER_UI_PASSWORD as string
    }
  }),
  swaggerUi.setup(swaggerDoc)
);

appRouter.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const nativeFn = res.json;

  res.json = function resJSON(data) {
    arguments[0] = { success: true, data };

    return nativeFn.apply(res, arguments as any);
  };

  res.error = function resError(data) {
    arguments[0] = { success: false, error: data };

    return nativeFn.apply(res, arguments as any);
  };
  next();
});

/**
 * @openapi
 * /health:
 *   summary: Health
 *   get:
 *     tags:
 *     - Health
 *     description: An endpoint to check the health of the service
 *     responses:
 *       200:
 *         description: Returns a 200 if service is alive.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: string
 */
appRouter.get('/health', (req: express.Request, res: express.Response) =>
  res.json({ status: 'OK' })
);

const appRouters: RouterConfig[] = [
  userRoute,
  programRoute,
  workoutRoute,
  exerciseRoute,
  workoutExerciseRoute,
  workoutTrackRoute
];
for (const routerConfig of appRouters) {
  appRouter.use(routerConfig.basePath, routerConfig.router);
}

export default appRouter;
