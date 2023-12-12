module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
};
