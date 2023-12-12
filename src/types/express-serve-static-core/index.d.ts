declare module 'express-serve-static-core' {
  interface Response {
    error: (data: any) => Response;
  }
}

export {};
