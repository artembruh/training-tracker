declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV?: string;
        PORT?: string;
        SWAGGER_UI_USER?: string;
        SWAGGER_UI_PASSWORD?: string;
        DATABASE_CLIENT_TYPE?: 'MEMORY' | 'REDIS' | 'DATABASE';
      }
    }
  }
}
