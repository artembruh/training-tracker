import { type Router } from 'express';

export interface RouterConfig {
  basePath: string;
  router: Router;
}
